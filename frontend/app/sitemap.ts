import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { servicePages } from '@/content/servicePages';
import { companyPages } from '@/content/companyPages';
import { locations, DEPLOYED_LOCATION_SLUGS } from '@/content/locations';
import { acRepairCopy } from '@/content/location-copy/ac-repair';
import { furnaceRepairCopy } from '@/content/location-copy/furnace-repair';
import { waterHeaterRepairCopy } from '@/content/location-copy/water-heater-repair';
import { drainCleaningCopy } from '@/content/location-copy/drain-cleaning';
import { acInstallationCopy } from '@/content/location-copy/ac-installation-replacement';
import { heatPumpsCopy } from '@/content/location-copy/heat-pumps';
import { leakRepairCopy } from '@/content/location-copy/leak-repair';
import { sewerRepairCopy } from '@/content/location-copy/sewer-repair-replacement';
import { furnaceInstallationCopy } from '@/content/location-copy/furnace-installation-replacement';
import { acMaintenanceCopy } from '@/content/location-copy/ac-maintenance';
import { furnaceMaintenanceCopy } from '@/content/location-copy/furnace-maintenance';
import { plumbingRepairCopy } from '@/content/location-copy/plumbing-repair';
import { plumbingInstallationCopy } from '@/content/location-copy/plumbing-installation';
import { faucetCopy } from '@/content/location-copy/faucet-repair-replacement';
import { sumpPumpsCopy } from '@/content/location-copy/sump-pumps';
import { waterHeaterInstallationCopy } from '@/content/location-copy/water-heater-installation';
import { waterHeaterMaintenanceCopy } from '@/content/location-copy/water-heater-maintenance';
import { tanklessCopy } from '@/content/location-copy/tankless-water-heater';
import { waterQualityCopy } from '@/content/location-copy/water-quality';
import { miniSplitsCopy } from '@/content/location-copy/mini-splits';
import { miniSplitInstallationCopy } from '@/content/location-copy/mini-split-installation';
import { miniSplitRepairCopy } from '@/content/location-copy/mini-split-repair';
import { indoorAirQualityCopy } from '@/content/location-copy/indoor-air-quality';
import { panelReplacementCopy } from '@/content/location-copy/electrical-panel-replacement';
import { switchesOutletsCopy } from '@/content/location-copy/switches-outlets';
import { mastRepairCopy } from '@/content/location-copy/electrical-mast-repair';
import { evChargersCopy } from '@/content/location-copy/ev-chargers';
import { ceilingFanCopy } from '@/content/location-copy/ceiling-fan-installation';
import { exhaustFanCopy } from '@/content/location-copy/exhaust-fan-installation-repair';
import { surgeProtectorCopy } from '@/content/location-copy/surge-protector-installation';
import { homeRewiringCopy } from '@/content/location-copy/home-rewiring';
import { electricalInspectionsCopy } from '@/content/location-copy/electrical-inspections';
import { hotTubWiringCopy } from '@/content/location-copy/hot-tub-wiring';
import { outdoorLightingCopy } from '@/content/location-copy/outdoor-lighting';
import { indoorLightingCopy } from '@/content/location-copy/indoor-lighting';
import { landscapeLightingCopy } from '@/content/location-copy/landscape-lighting';
import { successStories } from '@/content/successStories';
import { posts } from '@/content/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');

  const staticRoutes = ['', '/services', '/blog', '/areas', '/specials', '/free-estimate', '/comfort-club', '/heat-pump-incentives', '/about', '/careers', '/financing', '/difference', '/customer-success-stories', '/reviews', '/referrals', '/university', '/faq'].map((path) => ({
    url: `${base}${path}/`,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const subServiceRoutes = servicePages.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const companyRoutes = companyPages.map((p) => ({
    url: `${base}/${p.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const locationRoutes = locations
    .filter((l) => DEPLOYED_LOCATION_SLUGS.includes(l.slug))
    .map((l) => ({
      url: `${base}/services/emergency-plumbing/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const acRepairLocationRoutes = locations
    .filter((l) => acRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/ac-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const furnaceRepairLocationRoutes = locations
    .filter((l) => furnaceRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/furnace-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const waterHeaterRepairLocationRoutes = locations
    .filter((l) => waterHeaterRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/water-heater-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const drainCleaningLocationRoutes = locations
    .filter((l) => drainCleaningCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/drain-cleaning/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const acInstallationLocationRoutes = locations
    .filter((l) => acInstallationCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/ac-installation-replacement/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const heatPumpsLocationRoutes = locations
    .filter((l) => heatPumpsCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/heat-pumps/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const leakRepairLocationRoutes = locations
    .filter((l) => leakRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/leak-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const sewerRepairLocationRoutes = locations
    .filter((l) => sewerRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/sewer-repair-replacement/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const furnaceInstallationLocationRoutes = locations
    .filter((l) => furnaceInstallationCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/furnace-installation-replacement/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const acMaintenanceLocationRoutes = locations
    .filter((l) => acMaintenanceCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/ac-maintenance/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const furnaceMaintenanceLocationRoutes = locations
    .filter((l) => furnaceMaintenanceCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/furnace-maintenance/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const plumbingRepairLocationRoutes = locations
    .filter((l) => plumbingRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/plumbing-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const plumbingInstallationLocationRoutes = locations
    .filter((l) => plumbingInstallationCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/plumbing-installation/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const faucetLocationRoutes = locations
    .filter((l) => faucetCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/faucet-repair-replacement/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const sumpPumpsLocationRoutes = locations
    .filter((l) => sumpPumpsCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/sump-pumps/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const waterHeaterInstallationLocationRoutes = locations
    .filter((l) => waterHeaterInstallationCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/water-heater-installation/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const waterHeaterMaintenanceLocationRoutes = locations
    .filter((l) => waterHeaterMaintenanceCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/water-heater-maintenance/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const tanklessLocationRoutes = locations
    .filter((l) => tanklessCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/tankless-water-heater/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const waterQualityLocationRoutes = locations
    .filter((l) => waterQualityCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/water-quality/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const miniSplitsLocationRoutes = locations
    .filter((l) => miniSplitsCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/mini-splits/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const miniSplitInstallationLocationRoutes = locations
    .filter((l) => miniSplitInstallationCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/mini-split-installation/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const miniSplitRepairLocationRoutes = locations
    .filter((l) => miniSplitRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/mini-split-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const indoorAirQualityLocationRoutes = locations
    .filter((l) => indoorAirQualityCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/indoor-air-quality/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const panelReplacementLocationRoutes = locations
    .filter((l) => panelReplacementCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/electrical-panel-replacement/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const switchesOutletsLocationRoutes = locations
    .filter((l) => switchesOutletsCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/switches-outlets/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const mastRepairLocationRoutes = locations
    .filter((l) => mastRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/electrical-mast-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const evChargersLocationRoutes = locations
    .filter((l) => evChargersCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/ev-chargers/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const ceilingFanLocationRoutes = locations
    .filter((l) => ceilingFanCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/ceiling-fan-installation/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const exhaustFanLocationRoutes = locations
    .filter((l) => exhaustFanCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/exhaust-fan-installation-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const surgeProtectorLocationRoutes = locations
    .filter((l) => surgeProtectorCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/surge-protector-installation/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const homeRewiringLocationRoutes = locations
    .filter((l) => homeRewiringCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/home-rewiring/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const electricalInspectionsLocationRoutes = locations
    .filter((l) => electricalInspectionsCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/electrical-inspections/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const hotTubWiringLocationRoutes = locations
    .filter((l) => hotTubWiringCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/hot-tub-wiring/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const outdoorLightingLocationRoutes = locations
    .filter((l) => outdoorLightingCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/outdoor-lighting/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const indoorLightingLocationRoutes = locations
    .filter((l) => indoorLightingCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/indoor-lighting/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const landscapeLightingLocationRoutes = locations
    .filter((l) => landscapeLightingCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/landscape-lighting/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const successStoryRoutes = successStories.map((s) => ({
    url: `${base}/customer-success-stories/${s.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: p.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...subServiceRoutes, ...companyRoutes, ...locationRoutes, ...acRepairLocationRoutes, ...furnaceRepairLocationRoutes, ...waterHeaterRepairLocationRoutes, ...drainCleaningLocationRoutes, ...acInstallationLocationRoutes, ...heatPumpsLocationRoutes, ...leakRepairLocationRoutes, ...sewerRepairLocationRoutes, ...furnaceInstallationLocationRoutes, ...acMaintenanceLocationRoutes, ...furnaceMaintenanceLocationRoutes, ...plumbingRepairLocationRoutes, ...plumbingInstallationLocationRoutes, ...faucetLocationRoutes, ...sumpPumpsLocationRoutes, ...waterHeaterInstallationLocationRoutes, ...waterHeaterMaintenanceLocationRoutes, ...tanklessLocationRoutes, ...waterQualityLocationRoutes, ...miniSplitsLocationRoutes, ...miniSplitInstallationLocationRoutes, ...miniSplitRepairLocationRoutes, ...indoorAirQualityLocationRoutes, ...panelReplacementLocationRoutes, ...switchesOutletsLocationRoutes, ...mastRepairLocationRoutes, ...evChargersLocationRoutes, ...ceilingFanLocationRoutes, ...exhaustFanLocationRoutes, ...surgeProtectorLocationRoutes, ...homeRewiringLocationRoutes, ...electricalInspectionsLocationRoutes, ...hotTubWiringLocationRoutes, ...outdoorLightingLocationRoutes, ...indoorLightingLocationRoutes, ...landscapeLightingLocationRoutes, ...successStoryRoutes, ...postRoutes];
}
