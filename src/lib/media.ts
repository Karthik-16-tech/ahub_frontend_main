/** Shared media URL helpers for frontend ↔ backend integration */

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

/** Public media path prefix — backend serves uploaded files here */
export const PUBLIC_MEDIA_PATH = "/api/public/media";

/** When true, `<img src>` uses API fetch URLs instead of bundled local URLs */
export const USE_API_MEDIA = import.meta.env.VITE_USE_API_MEDIA === "true";

/** Build full fetch URL for a relative asset path (e.g. `team/photo.jpg`) */
export function mediaFetchUrl(relativePath: string): string {
  const normalized = relativePath.replace(/^\/+/, "");
  return `${API_BASE_URL}${PUBLIC_MEDIA_PATH}/${normalized}`;
}

/** Resolve relative or absolute backend path to a full URL */
export function resolveBackendMediaUrl(path: string | null | undefined): string {
  if (!path) return "";
  if (path.startsWith("blob:") || path.startsWith("data:")) {
    return path;
  }
  let formatted = String(path)
    .replace(/https?:\/\/ahub-image\.s3[.-][\w.-]*\.amazonaws\.com/gi, "https://dtfhihp4ovn79.cloudfront.net")
    .replace(/\/vision_and_roadmap\//gi, "/vision_and+_roadmap/");
  const lower = formatted.toLowerCase();
  if (lower.includes("dtfhihp4ovn79.cloudfront.net")) {
    return formatted;
  }


  if (lower.includes("infrastructure") || lower.includes("infastructure")) {
    if (lower.includes("collab")) return "https://dtfhihp4ovn79.cloudfront.net/Infrastructure/collabrative+environment.png";
    if (lower.includes("conf") || lower.includes("event")) return "https://dtfhihp4ovn79.cloudfront.net/Infrastructure/confenrce+hall.jpg";
    if (lower.includes("iot") || lower.includes("lab") || lower.includes("research")) return "https://dtfhihp4ovn79.cloudfront.net/Infrastructure/iot+labs.jpeg";
    if (lower.includes("ahub") || lower.includes("campus") || lower.includes("hero")) return "https://dtfhihp4ovn79.cloudfront.net/Infrastructure/ahub.jpg";
  }
  if (lower.includes("vision") || lower.includes("mission") || lower.includes("roadmap") || lower.includes("milestone")) {
    if (lower.includes("2021")) return "https://dtfhihp4ovn79.cloudfront.net/vision_and+_roadmap/2021-2022.png";
    if (lower.includes("2022")) return "https://dtfhihp4ovn79.cloudfront.net/vision_and+_roadmap/2022-2023.png";
    if (lower.includes("2023") || lower.includes("2024")) return "https://dtfhihp4ovn79.cloudfront.net/vision_and+_roadmap/2023-2024.png";
    if (lower.includes("mission")) return "https://dtfhihp4ovn79.cloudfront.net/vision_and+_roadmap/mission.jpeg";
    if (lower.includes("roadmap")) return "https://dtfhihp4ovn79.cloudfront.net/vision_and+_roadmap/roadmap.png";
    if (lower.includes("vision")) return "https://dtfhihp4ovn79.cloudfront.net/vision_and+_roadmap/vision.jpg";
  }
  if (lower.includes("partners") || lower.includes("partner")) {
    if (lower.includes("acir")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/acir.jpg";
    if (lower.includes("alcove")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/alcove.jpg";
    if (lower.includes("atpi")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/atpi.jpg";
    if (lower.includes("avanti")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/avanti.png";
    if (lower.includes("cii")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/cii.png";
    if (lower.includes("digifac")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/digifac.png";
    if (lower.includes("gait")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/gait_solutions.png";
    if (lower.includes("icompass")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/icompass.png";
    if (lower.includes("meity")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/meity.jpg";
    if (lower.includes("ministry") || lower.includes("sceince") || lower.includes("science")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/ministry+of+sceince.png";
    if (lower.includes("ni-msme") || lower.includes("ni_msme") || lower.includes("nimsme")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/Ni-msme.png";
    if (lower.includes("msme")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/msme-logo-p.png";
    if (lower.includes("nasscom")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/nasscom.png";
    if (lower.includes("pbl")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/pbl_trnasport.png";
    if (lower.includes("purude") || lower.includes("purdue")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/purude.jpg";
    if (lower.includes("rosys")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/rosys.jpg";
    if (lower.includes("sandhya")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/sandhya_aqua.jpg";
    if (lower.includes("sandlogic")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/sandlogic.jpg";
    if (lower.includes("tie-women") || lower.includes("tie_women") || lower.includes("women")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/tie_women.jpg";
    if (lower.includes("tie-u") || lower.includes("tie_u") || lower.includes("tie u")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/TiE-U.png";
    if (lower.includes("tie")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/tie.jpg";
    if (lower.includes("wageningen")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/wageningen.png";
    if (lower.includes("young") || lower.includes("indians")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/young+indians.jpg";
    if (lower.includes("ed")) return "https://dtfhihp4ovn79.cloudfront.net/Partners/ed.jpg";
  }
  if (lower.includes("startup_events") || lower.includes("startup-events") || lower.includes("startup_event") || lower.includes("startups-events") || lower.includes("startup-saturdays") || lower.includes("hackap") || lower.includes("ignite") || lower.includes("isba") || lower.includes("ideathon") || lower.includes("agriculture-entrepreneur") || lower.includes("teck-league") || lower.includes("marketing-customer")) {
    if (lower.includes("women_tie") || lower.includes("women")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/women_tie.jpeg";
    if (lower.includes("starurdays") || lower.includes("startup+starurdays") || lower.includes("monthly meetup") || lower.includes("monthly-meetup")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/startup+starurdays.jpg";
    if (lower.includes("agriculture-entrepreneurship-1")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/agriculture-entrepreneurship-1.webp";
    if (lower.includes("agriculture")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/agriculture-entrepreneurship.webp";
    if (lower.includes("andhra-teck-league-2023-1")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/andhra-teck-league-2023-1.webp";
    if (lower.includes("andhra-teck-league-2023-2")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/andhra-teck-league-2023-2.webp";
    if (lower.includes("andhra-teck") || lower.includes("teck-league")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/andhra-teck-league-2023.webp";
    if (lower.includes("hackap-arts-culture-1")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/hackap-arts-culture-1.jpg";
    if (lower.includes("hackap-arts-culture-2")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/hackap-arts-culture-2.jpg";
    if (lower.includes("hackap")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/hackap-arts-culture.jpg";
    if (lower.includes("ignite-program-2026-1")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/ignite-program-2026-1.jpg";
    if (lower.includes("ignite-program-2026-2")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/ignite-program-2026-2.jpg";
    if (lower.includes("ignite-program-2026-3")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/ignite-program-2026-3.jpg";
    if (lower.includes("ignite")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/ignite-program-2026.jpg";
    if (lower.includes("nov-2024-1") || lower.includes("nov_2024_1")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/startup-saturdays-nov-2024-1.jpg";
    if (lower.includes("nov-2024-2") || lower.includes("nov_2024_2")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/startup-saturdays-nov-2024-2.jpg";
    if (lower.includes("nov-2024") || lower.includes("energy")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/startup-saturdays-nov-2024.jpg";
    if (lower.includes("may-2025") || lower.includes("waste")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/startup-saturdays-may-2025.jpg";
    if (lower.includes("sep-2025") || lower.includes("marine") || lower.includes("seaweed")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/startup-saturdays-sep-2025.jpg";
    if (lower.includes("health") || lower.includes("biomed")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/health-biomed-ideathon-2023.jpg";
    if (lower.includes("isba-cxo-connect-2025-1")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/isba-cxo-connect-2025-1.webp";
    if (lower.includes("isba")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/isba-cxo-connect-2025.webp";
    if (lower.includes("marketing-customer-acquisition-1")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/marketing-customer-acquisition-1.jpg";
    if (lower.includes("marketing")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/marketing-customer-acquisition.jpg";
    if (lower.includes("3883")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/IMG_3883.jpg";
    if (lower.includes("3884")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/IMG_3884.jpg";
    if (lower.includes("3899")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/IMG_3899.jpg";
    if (lower.includes("3902")) return "https://dtfhihp4ovn79.cloudfront.net/startup_events/IMG_3902.jpg";
  }
  if (lower.includes("startup_portfolio") || lower.includes("portfolio") || lower.includes("startup")) {
    if (lower.includes("agri") && lower.includes("dna")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/agri+dna.jpg";
    if (lower.includes("antar")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/antar+iot.png";
    if (lower.includes("austhraa")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/austhraa_motors_logo.jpg";
    if (lower.includes("billbo")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/billbo.jpg";
    if (lower.includes("bizpro")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/bizpro.png";
    if (lower.includes("cirus")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/cirus.jpg";
    if (lower.includes("data") && (lower.includes("foundry") || lower.includes("foundary"))) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/data+foundary.png";
    if (lower.includes("der") || lower.includes("autobot")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/der+auto+bot.jpg";
    if (lower.includes("digiot")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/digiotai.jpg";
    if (lower.includes("edumoon")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/edumoon.png";
    if (lower.includes("furpsq")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/furpsq.jpg";
    if (lower.includes("greenjams") || lower.includes("green jams")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/greenjams_logo.jpg";
    if (lower.includes("happy") || lower.includes("drivers")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/happy+drivers.jpg";
    if (lower.includes("house") || lower.includes("insta")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/house+insta.png";
    if (lower.includes("icompass")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/icompass.png";
    if (lower.includes("innoccito")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/innoccito.jpg";
    if (lower.includes("interview") && lower.includes("buddy")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/interview+buddy.png";
    if (lower.includes("ipmg")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/ipmg.jpg";
    if (lower.includes("jaitra")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/jaitra.jpg";
    if (lower.includes("jnana")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/jnana.jpg";
    if (lower.includes("joora")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/joora_drone_consultants_logo.jpg";
    if (lower.includes("matric")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/matric+services.png";
    if (lower.includes("nest") || lower.includes("webhost")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/nest+webhost.png";
    if (lower.includes("techcreatz")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/nr+techcreatz.png";
    if (lower.includes("pick") && lower.includes("book")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/pick+a+book.png";
    if (lower.includes("return") || lower.includes("trucks")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/retruntrucks_logo.jpg";
    if (lower.includes("rolls") || lower.includes("mama")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/rolls+mama.jpg";
    if (lower.includes("sandlogic")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/sandlogic.png";
    if (lower.includes("schemax")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/schemax.png";
    if (lower.includes("sconex")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/sconex.jpg";
    if (lower.includes("spice") || lower.includes("route")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/spice+route.jpg";
    if (lower.includes("spot") || lower.includes("times") || lower.includes("mies")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/spot+times.png";
    if (lower.includes("starbeat")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/starbeat.jpg";
    if (lower.includes("starry") || lower.includes("stories")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/starry+stories.png";
    if (lower.includes("sweya")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/sweya.png";
    if (lower.includes("talent") || lower.includes("spotify")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/talentspotify_logo.jpg";
    if (lower.includes("taramandal")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/taramandal.jpg";
    if (lower.includes("tessrac")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/tessrac_logo.jpg";
    if (lower.includes("train") || lower.includes("dhaba")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/train+dhaba.avif";
    if (lower.includes("vihaan")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/vihaan.jpg";
    if (lower.includes("vyomastra") || lower.includes("vyomstra")) return "https://dtfhihp4ovn79.cloudfront.net/startup_portfolio/vyomastra.jpg";
  }
  if (lower.includes("case_studies") || lower.includes("case-studies") || lower.includes("case studies") || lower.includes("case_study")) {
    if (lower.includes("gny")) return "https://dtfhihp4ovn79.cloudfront.net/case_studies/GNY.AI.png";
    if (lower.includes("green") || lower.includes("jams")) return "https://dtfhihp4ovn79.cloudfront.net/case_studies/Green+jams.png";
    if (lower.includes("interview") || lower.includes("buddy")) return "https://dtfhihp4ovn79.cloudfront.net/case_studies/interview+buddy.png";
  }
  if (lower.includes("event_calendar") || lower.includes("event-calendar") || lower.includes("calendar") || lower.includes("latest events") || lower.includes("latest_events") || lower.includes("ecosystem")) {
    if (lower.includes("drone-race") || lower.includes("drone race") || lower.includes("drone_race")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/drone-race-2026.jpg";
    if (lower.includes("idea-bout") || lower.includes("idea bout") || lower.includes("idea_bout")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/idea-bout-2026.jpg";
    if (lower.includes("natural-farming") || lower.includes("natural farming") || lower.includes("organic")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/natural-farming-exhibition.jpg";
    if (lower.includes("pre-ai") || lower.includes("pre ai") || lower.includes("ai-summit")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/pre-ai-summit.jpg";
    if (lower.includes("first-customers") || lower.includes("first customers") || lower.includes("startup-first")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/startup-first-customers.webp";
    if (lower.includes("spark-nation") || lower.includes("spark nation") || lower.includes("codium-spark")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/codium-spark-hackathon.jpg";
    if (lower.includes("urvikrithi") || lower.includes("wsw-2k25") || lower.includes("wsw")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/wsw-2k25-ideathon.heic";
    if (lower.includes("hackap-hackathon-17") || lower.includes("hackap-17") || lower.includes("hackap-hackathon-2025")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/hackap-hackathon-17.jpg";
    if (lower.includes("yukthi") || lower.includes("yu-program") || lower.includes("yu program")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/yu-program-registration.webp";
    if (lower.includes("idea-surge") || lower.includes("idea surge")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/idea-surge-2025.jpg";
    if (lower.includes("hackap-hackathon-15") || lower.includes("hackap-15")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/hackap-hackathon-15.webp";
    if (lower.includes("hackap-hackathon-13") || lower.includes("hackap-13")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/hackap-hackathon-13.jpg";
    if (lower.includes("devfest") || lower.includes("ahub-devfest")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/ahub-devfest-2024.webp";
    if (lower.includes("makers-spirit") || lower.includes("maker's spirit") || lower.includes("register-luma")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/register-luma-sbo2nqar.jpg";
    if (lower.includes("startup-success") || lower.includes("startup success") || lower.includes("google starup") || lower.includes("google+starup")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/google+starup+success+days.jpg";
    if (lower.includes("andhra-tech") || lower.includes("andhra texh") || lower.includes("andhra+texh") || lower.includes("tech league")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/andhra+texh+league.jpg";
    if (lower.includes("agritech") || lower.includes("hackap agritech")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/Hackap+agritech+hackathon.jpg";
    if (lower.includes("runnin") || lower.includes("wild")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/runnin+wild.jpeg";
    if (lower.includes("student design") || lower.includes("stduet design") || lower.includes("eds stduet") || lower.includes("design competition")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/eds+stduet+design+competittion.jpeg";
    if (lower.includes("eyes-wide-shut") || lower.includes("eyes wide shut") || lower.includes("eyes+wide")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/eyes+wide+shut.jpg";
    if (lower.includes("been there donw that 2") || lower.includes("been+there+donw+that+2") || lower.includes("donw that")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/been+there+donw+that+2.jpeg";
    if (lower.includes("been there") || lower.includes("been+there") || lower.includes("study-abroad")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/been+there+done+that.jpeg";
    if (lower.includes("starups staruday") || lower.includes("starups+staruday") || lower.includes("staruday")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/starups+staruday.jpg";
    if (lower.includes("start up saturday") || lower.includes("start+up+saturday") || lower.includes("start_up_saturday")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/Start+Up+saturday.jpeg";
    if (lower.includes("startup saturday") || lower.includes("startup+saturday") || lower.includes("startup_saturday")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/startup+saturday.jpeg";
    if (lower.includes("ideathon")) return "https://dtfhihp4ovn79.cloudfront.net/event_calendar/ideathon.jpg";
  }
  if (lower.includes("what we do") || lower.includes("what-we-do") || lower.includes("what_we_do") || lower.includes("what+we+do")) {
    if (lower.includes("01")) return "https://dtfhihp4ovn79.cloudfront.net/what+we+do/01.png";
    if (lower.includes("02")) return "https://dtfhihp4ovn79.cloudfront.net/what+we+do/02.png";
    if (lower.includes("03")) return "https://dtfhihp4ovn79.cloudfront.net/what+we+do/03.png";
    if (lower.includes("04")) return "https://dtfhihp4ovn79.cloudfront.net/what+we+do/04.png";
  }
  if (lower.includes("portfolio_companies") || lower.includes("portfolio-companies") || lower.includes("portfolio companies")) {
    if (lower.includes("eduemblem_founder") || lower.includes("varma")) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/eduemblem_founder_varma.jpg";
    if (lower.includes("eduemblem")) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/eduemblem.png";
    if (lower.includes("interview") && (lower.includes("founder") || lower.includes("ujwal"))) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/interview_buddy_founder.png";
    if (lower.includes("interview")) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/interview_buddy_logo.png";
    if (lower.includes("drembot_founder") || lower.includes("dreambot_founder") || lower.includes("giri")) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/giri-balasubramaniam_drembot_founder.jpg";
    if (lower.includes("dreambot")) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/dreambot.png";
    if (lower.includes("joora") && (lower.includes("sagar") || lower.includes("sahit") || lower.includes("founder"))) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/sagar_sahit_joora+drones.png";
    if (lower.includes("joora")) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/joora_drone_consultants_logo-removebg-preview.png";
    if (lower.includes("kodefast") && (lower.includes("founder") || lower.includes("radha"))) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/kodefast_founder.jpg";
    if (lower.includes("kodefast")) return "https://dtfhihp4ovn79.cloudfront.net/portfolio-companies/kodefast-removebg-preview.png";
  }
  if (lower.includes("incubators") || lower.includes("incubator")) {
    if (lower.includes("au element") || lower.includes("au+element") || lower.includes("element")) return "https://dtfhihp4ovn79.cloudfront.net/incubators/au+element+ahub.jpg";
    if (lower.includes("didgifac") || lower.includes("digifac")) return "https://dtfhihp4ovn79.cloudfront.net/incubators/didgifac.jpg";
    if (lower.includes("marine")) return "https://dtfhihp4ovn79.cloudfront.net/incubators/marine+ahub.jpg";
    if (lower.includes("nasscom")) return "https://dtfhihp4ovn79.cloudfront.net/incubators/nasscom+ahub.jpg";
    if (lower.includes("ahub")) return "https://dtfhihp4ovn79.cloudfront.net/incubators/ahub.jpg";
  }
  if (lower.includes("visitors") || lower.includes("visitor") || lower.includes("testimonals") || lower.includes("testimonial")) {
    if (lower.includes("bvr") || lower.includes("mohan") || lower.includes("reddy")) return "https://dtfhihp4ovn79.cloudfront.net/visitors/bvr+mohan+reddy.jpeg";
    if (lower.includes("carmelo") || lower.includes("rosa")) return "https://dtfhihp4ovn79.cloudfront.net/visitors/carmelo+rosa.jpg";
    if (lower.includes("lawrence") || lower.includes("jones")) return "https://dtfhihp4ovn79.cloudfront.net/visitors/dr+lawrence+jones.jpeg";
    if (lower.includes("malcolm") || lower.includes("byrne")) return "https://dtfhihp4ovn79.cloudfront.net/visitors/malcolm+Byrne.jpg";
    if (lower.includes("mats") || lower.includes("viberg")) return "https://dtfhihp4ovn79.cloudfront.net/visitors/mats+viberg.jpeg";
    if (lower.includes("naryana") || lower.includes("narayana") || lower.includes("murthy")) return "https://dtfhihp4ovn79.cloudfront.net/visitors/naryana+murthy.png";
    if (lower.includes("rishi") || lower.includes("mehta")) return "https://dtfhihp4ovn79.cloudfront.net/visitors/rishi+mehta.jpg";
  }
  if (
    lower.includes("startup_events") ||
    lower.includes("startup-events") ||
    lower.includes("startup_saturdays") ||
    lower.includes("startup-saturdays") ||
    lower.includes("agriculture") ||
    lower.includes("entreprene") ||
    lower.includes("greetings_from_aaa") ||
    lower.includes("img_3899") ||
    lower.includes("3899")
  ) {
    if (lower.includes("sep") || lower.includes("september") || lower.includes("2025")) {
      return "https://dtfhihp4ovn79.cloudfront.net/startup_events/startup-saturdays-sep-2025.jpg";
    }
    if (lower.includes("agriculture") || lower.includes("entreprene") || lower.includes("greetings") || lower.includes("aaa")) {
      return "https://dtfhihp4ovn79.cloudfront.net/startup_events/agriculture-entrepreneurship.webp";
    }
    if (lower.includes("3899") || lower.includes("img_3899") || lower.includes("img-3899")) {
      return "https://dtfhihp4ovn79.cloudfront.net/startup_events/IMG_3899.jpg";
    }
    if (lower.includes("nov") || lower.includes("november") || lower.includes("2024") || lower.includes("electrifying") || lower.includes("electricity")) {
      return "https://dtfhihp4ovn79.cloudfront.net/startup_events/startup-saturdays-nov-2024-1.jpg";
    }
    return "https://dtfhihp4ovn79.cloudfront.net/startup_events/startup-saturdays-sep-2025.jpg";
  }
  if (lower.includes("ahub-logo-1") || lower.includes("ahub_logo") || lower.includes("ahub-logo")) {
    return "https://dtfhihp4ovn79.cloudfront.net/AHub-Logo-1.png";
  }
  if (lower.includes("calender.png") || lower.includes("calendar.png")) {
    return "https://dtfhihp4ovn79.cloudfront.net/calender.png";
  }
  if (lower.includes("icons/") || lower.includes("icons\\") || lower.includes("icon")) {
    if (lower.includes("board")) return "https://dtfhihp4ovn79.cloudfront.net/icons/board.png";
    if (lower.includes("case_studies") || lower.includes("case-studies") || lower.includes("case_study")) return "https://dtfhihp4ovn79.cloudfront.net/icons/case_studies.png";
    if (lower.includes("event_calendar") || lower.includes("event-calendar") || lower.includes("event_calender")) return "https://dtfhihp4ovn79.cloudfront.net/icons/event_calendar.png";
    if (lower.includes("event_registartion") || lower.includes("event-registration") || lower.includes("event_registration")) return "https://dtfhihp4ovn79.cloudfront.net/icons/event_registartion.png";
    if (lower.includes("impact")) return "https://dtfhihp4ovn79.cloudfront.net/icons/impact.png";
    if (lower.includes("infasrtucture") || lower.includes("infrastructure")) return "https://dtfhihp4ovn79.cloudfront.net/icons/infasrtucture.png";
    if (lower.includes("internship_registartion") || lower.includes("internship-registration") || lower.includes("internship_registration")) return "https://dtfhihp4ovn79.cloudfront.net/icons/internship_registartion.png";
    if (lower.includes("join_us") || lower.includes("join-us") || lower.includes("join")) return "https://dtfhihp4ovn79.cloudfront.net/icons/join_us.png";
    if (lower.includes("mentors") || lower.includes("mentor")) return "https://dtfhihp4ovn79.cloudfront.net/icons/mentors.png";
    if (lower.includes("operational_model") || lower.includes("operational-model") || lower.includes("operational")) return "https://dtfhihp4ovn79.cloudfront.net/icons/operational_model.png";
    if (lower.includes("partners") || lower.includes("partner")) return "https://dtfhihp4ovn79.cloudfront.net/icons/partners.png";
    if (lower.includes("pitch_to_us") || lower.includes("pitch-to-us") || lower.includes("pitch")) return "https://dtfhihp4ovn79.cloudfront.net/icons/pitch_to_us.png";
    if (lower.includes("press")) return "https://dtfhihp4ovn79.cloudfront.net/icons/press.png";
    if (lower.includes("reports") || lower.includes("report")) return "https://dtfhihp4ovn79.cloudfront.net/icons/reports.png";
    if (lower.includes("rewared") || lower.includes("reward") || lower.includes("recognition")) return "https://dtfhihp4ovn79.cloudfront.net/icons/rewared_recognition.png";
    if (lower.includes("startup_blog") || lower.includes("startup-blog") || lower.includes("blog")) return "https://dtfhihp4ovn79.cloudfront.net/icons/startup_blog.png";
    if (lower.includes("startup_events") || lower.includes("startup-events") || lower.includes("events")) return "https://dtfhihp4ovn79.cloudfront.net/icons/startup_events.png";
    if (lower.includes("startup_funding") || lower.includes("startup-funding") || lower.includes("funding")) return "https://dtfhihp4ovn79.cloudfront.net/icons/startup_funding.png";
    if (lower.includes("startup_porfolio") || lower.includes("startup_portfolio") || lower.includes("portfolio")) return "https://dtfhihp4ovn79.cloudfront.net/icons/startup_porfolio.png";
    if (lower.includes("startup_registartion") || lower.includes("startup-registration") || lower.includes("startup_registration")) return "https://dtfhihp4ovn79.cloudfront.net/icons/startup_registartion.png";
    if (lower.includes("team")) return "https://dtfhihp4ovn79.cloudfront.net/icons/team.png";
    if (lower.includes("vision-roadmap") || lower.includes("vision_roadmap") || lower.includes("roadmap") || lower.includes("vision")) return "https://dtfhihp4ovn79.cloudfront.net/icons/vision-roadmap.png";
  }
  if (lower.includes(".mp4") || lower.includes("auic nidhi itbi") || lower.includes("auic+nidhi+itbi")) {
    return "https://dtfhihp4ovn79.cloudfront.net/AUIC%20NIDHI%20iTBI%20-%20a-hub%20%281080p%2C%20h264%29%20%281%29.mp4";
  }
  if (lower.includes("startup blog.png") || lower.includes("startup_blog.png") || lower.includes("startup+blog.png")) {
    return "https://dtfhihp4ovn79.cloudfront.net/startup+blog.png";
  }
  if (lower.includes("reports/") || lower.includes("reports\\") || lower.includes(".pdf")) {
    if (lower.includes("akshaya")) return "https://dtfhihp4ovn79.cloudfront.net/reports/Akshaya+Aerospace+Technology+Private+Limited.pdf";
    if (lower.includes("ba infotech") || lower.includes("ba_infotech")) return "https://dtfhihp4ovn79.cloudfront.net/reports/BA+Infotech+Private+Limited.pdf";
    if (lower.includes("business plan") || lower.includes("business+plan") || lower.includes("business_plan") || lower.includes("business-plan")) return "https://dtfhihp4ovn79.cloudfront.net/reports/BUSINESS+PLANOF+A-HUB.pdf";
    if (lower.includes("funding")) return "https://dtfhihp4ovn79.cloudfront.net/reports/FUNDING+REPORT.pdf";
    if (lower.includes("joora")) return "https://dtfhihp4ovn79.cloudfront.net/reports/JOORA+DRONES.pdf";
    if (lower.includes("vizag") || lower.includes("iim") || lower.includes("intern")) return "https://dtfhihp4ovn79.cloudfront.net/reports/VIZAG+IIM+INTERN.pdf";
  }
  if (lower.includes("internship_registration") || lower.includes("internship-registration") || lower.includes("internships")) {
    if (lower.includes("g2v")) return "https://dtfhihp4ovn79.cloudfront.net/internship_registration/g2v_solar_solutions_pvt_ltd_logo.jpg";
    if (lower.includes("rhodium")) return "https://dtfhihp4ovn79.cloudfront.net/internship_registration/rhodium+tech.jpg";
  }
  if (lower.includes(".mp4") || lower.includes("hero") || lower.includes("auic nidhi itbi") || lower.includes("auic+nidhi+itbi")) {
    return "https://dtfhihp4ovn79.cloudfront.net/hero-optimized.mp4";
  }
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith(API_BASE_URL)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalized}`;
}

/** Pick display URL: API fetch URL when enabled, otherwise local bundled URL */
export function resolveDisplayUrl(
  fetchRelativePath: string,
  localUrl: string,
): string {
  return USE_API_MEDIA ? mediaFetchUrl(fetchRelativePath) : localUrl;
}
