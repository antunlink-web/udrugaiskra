// CRM integration layer (frontend only).
// These functions are intentionally backend-agnostic so they can later be
// wired to a real CRM / API endpoint without touching the UI components.

export interface WorkshopRegistrationPayload {
  workshopSlug: string;
  workshopTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note?: string;
}

export interface VolunteerPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  area: string;
  message?: string;
}

// TODO(CRM): replace the simulated delay with a real request, e.g.
//   await fetch(import.meta.env.VITE_CRM_ENDPOINT, { method: "POST", body: JSON.stringify(payload) })
export async function submitWorkshopRegistration(
  payload: WorkshopRegistrationPayload,
): Promise<{ ok: true }> {
  // eslint-disable-next-line no-console
  console.info("[CRM] workshop registration (pending integration):", payload);
  await new Promise((r) => setTimeout(r, 900));
  return { ok: true };
}

export async function submitVolunteerApplication(
  payload: VolunteerPayload,
): Promise<{ ok: true }> {
  // eslint-disable-next-line no-console
  console.info("[CRM] volunteer application (pending integration):", payload);
  await new Promise((r) => setTimeout(r, 900));
  return { ok: true };
}
