import { useCallback, useSyncExternalStore } from 'react';

const listeners = new Set();
let state = { toasts: [] };

function emit() {
  for (const l of listeners) l();
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

function addToast(toast) {
  const id = toast.id ?? Date.now() + Math.random();
  state = {
    ...state,
    toasts: [{ id, ...toast }, ...state.toasts].slice(0, 4)
  };
  emit();
  return id;
}

function dismiss(id) {
  state = { ...state, toasts: state.toasts.filter((t) => t.id !== id) };
  emit();
}

export function toast(toastInput) {
  const id = addToast(toastInput);
  const duration = Number.isFinite(toastInput?.duration) ? toastInput.duration : 2600;
  window.setTimeout(() => dismiss(id), Math.max(800, duration));
  return { id, dismiss: () => dismiss(id) };
}

export function useToast() {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const dismissToast = useCallback((id) => dismiss(id), []);
  return { ...snap, toast, dismiss: dismissToast };
}

