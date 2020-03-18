/*
  service worker
*/

// configuration
'use strict';

/*
  TODO: install all pages and images
  make background of header image grey
*/

const
  domain = '/* @echo rootURL */',
  domaincdn = '/* @echo imagecdn */',
  CACHE = '/* @echo version *//* @echo PWAcache */',
  offlineURL = '/* @echo rootpath *//* @echo offlineURL */',
  installFilesEssential = [
    '/* @echo rootpath */',
    '/* @echo rootpath */manifest.webmanifest',
    '/* @echo rootpath */css/main-/* @echo versionFile */.css',
    '/* @echo rootpath */js/main-/* @echo versionFile */.js',
    '/* @echo rootpath */js/offlinepage-/* @echo versionFile */.js',
    '/* @echo rootpath */contact/'
  ].concat(offlineURL),
  installFilesDesirable = [
    '/* @echo rootpath */',
    '/* @echo rootpath */rooms/',
    '/* @echo rootpath */restaurant/',
    '/* @echo rootpath */location/',
    '/* @echo imagecdn */f_auto/v1583684035/old-pines-logo',
    '/* @echo imagecdn */v1583683270/hero/old-pines-drive',
    '/* @echo imagecdn */v1583683269/hero/old-pines-drive-p',
    '/* @echo imagecdn */v1583683270/hero/old-pines-hotel',
    '/* @echo imagecdn */v1583683270/hero/old-pines-hotel-p'
  ];
