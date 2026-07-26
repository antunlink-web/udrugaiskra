# Pending integrations

## Workshop registration

Current component:

- `src/components/WorkshopRegistrationForm.tsx`

Current status:

- frontend form exists
- submission is simulated through `src/lib/crm.ts`
- real CRM destination is not yet defined
- connect only when workshop registration structure and CRM flow are finalized

## Volunteer application

Current component:

- `src/components/VolunteerForm.tsx`

Current status:

- frontend form exists
- submission is simulated through `src/lib/crm.ts`
- real CRM destination is not yet defined
- connect only after deciding whether applications go to CRM, email, or another endpoint

## Existing external integrations to preserve

- `/doniraj` redirects to `https://iskrasvjetlosti.com/doniraj`
- newsletter links point to `https://iskrasvjetlosti.com/newsletter`

## Architecture rule

Keep the public website and CRM as separate projects:

- `iskra.primelink.com.hr` — public website on Debian
- `iskrasvjetlosti.com` — existing CRM and backend

Do not migrate, merge, or duplicate the CRM unless explicitly planned later.
