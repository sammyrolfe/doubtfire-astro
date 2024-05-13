import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'OnTrack',
      social: {
        github: 'https://github.com/thoth-tech',
      },
      sidebar: [
        {
          label: 'Document',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Introduction',
              link: '/document/introduction/',
            },
          ],
        },
        {
          label: 'Intial Setup',
          autogenerate: {
            directory: '/setup',
          },
          items: [
            {
              label: 'OnTrack Intial Setup Guidance',
              link: '/setup/set',
            },
          ],
        },

        {
          label: 'Frontend documentation',
          autogenerate: {
            directory: '/frontend',
          },
          items: [
            {
              label: 'Frontend Documentation',
              link: '/frontend/page',
            },
          ],
        },

        {
          label: 'Backend documentation',
          autogenerate: {
            directory: '/backend',
          },
          items: [
            {
              label: 'Doubtfire API Documentation List',
              link: '/backend/api/api_list',
            },
            {
              label: 'activity types',
              link: '/backend/api/activity_types',
            },
            
            {
              label: 'admin',
              link: '/backend/api/admin',
            },
            {
              label: 'auth',
              link: '/backend/api/auth',
            },
            {
              label: 'campuses',
              link: '/backend/api/campuses',
            },
            {
              label: 'csv',
              link: '/backend/api/csv',
            },
            {
              label: 'projects',
              link: '/backend/api/projects',
            },
            {
              label: 'setting',
              link: '/backend/api/setting',
            },
            {
              label: 'students',
              link: '/backend/api/students',
            },
            {
              label: 'submission',
              link: '/backend/api/submission',
            },
            {
              label: 'tasks',
              link: '/backend/api/tasks',
            },
            {
              label: 'teaching periods',
              link: '/backend/api/teaching_periods',
            },
            {
              label: 'tii_actions',
              link: '/backend/api/tii_actions',
            },
            {
              label: 'tii_eula',
              link: '/backend/api/tii_eula',
            },
            {
              label: 'tii_hook',
              link: '/backend/api/tii_hook',
            },
            {
              label: 'tutorials',
              link: '/backend/api/tutorials',
            },
            {
              label: 'unit_roles',
              link: '/backend/api/unit_roles',
            },
           
            {
              label: 'units',
              link: '/backend/api/units',
            },
            {
              label: 'users',
              link: '/backend/api/users',
            },
            {
              label: 'webcal',
              link: '/backend/api/webcal',
            },
            {
              label: 'Error codes',
              link: '/backend/api/error_codes',
            },
          ],
        },
        {
          label: 'Team',
          autogenerate: { directory: 'team' },
        },
      ],
    }),
  ],
});
