import mixpanel from 'mixpanel-browser';

export type Event = { type: 'login'; payload: { email: string } };

export interface Analytics {
  event: (event: Event) => void;
}

export const analytics: Analytics = {
  event: (e) => {
    if (process.env.NODE_ENV === 'production') {
      mixpanel.track(e.type, e.payload);
    }
  },
};
