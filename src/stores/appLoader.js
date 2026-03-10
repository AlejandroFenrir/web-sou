import { computed, reactive } from 'vue';

const MIN_VISIBLE_MS = 350;

const state = reactive({
  requestCount: 0,
  routePending: false,
  visible: true,
  visibleSince: Date.now(),
});

let hideTimer = null;

const syncVisibility = () => {
  const hasPendingWork = state.requestCount > 0 || state.routePending;

  if (hasPendingWork) {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }

    if (!state.visible) {
      state.visible = true;
      state.visibleSince = Date.now();
    }

    return;
  }

  const elapsed = Date.now() - state.visibleSince;
  const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);

  if (hideTimer) {
    clearTimeout(hideTimer);
  }

  hideTimer = window.setTimeout(() => {
    if (state.requestCount === 0 && !state.routePending) {
      state.visible = false;
    }
  }, remaining);
};

export const beginRouteTransition = () => {
  state.routePending = true;
  syncVisibility();
};

export const endRouteTransition = () => {
  state.routePending = false;
  syncVisibility();
};

export const beginRequest = () => {
  state.requestCount += 1;
  syncVisibility();
};

export const endRequest = () => {
  state.requestCount = Math.max(0, state.requestCount - 1);
  syncVisibility();
};

export const trackRequest = async (requestFactory) => {
  beginRequest();

  try {
    return await requestFactory();
  } finally {
    endRequest();
  }
};

export const useAppLoader = () => ({
  isVisible: computed(() => state.visible),
  hasPendingRequests: computed(() => state.requestCount > 0),
});
