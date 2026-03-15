export type ServiceItem = {
  name: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
};

export type ServiceCategory = {
  name: string;
  slug: string;
  description: string;
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Cleanings & Prevention",
    slug: "cleanings-prevention",
    description: "The foundation of a healthy smile. Regular preventive care stops problems before they start, saving you time, discomfort, and cost down the road.",
    services: [
      {
        name: "Simple Tooth Extractions",
        slug: "simple-tooth-extractions",
        shortDesc: "Gentle removal of damaged or problematic teeth.",
        longDesc: "When a tooth is too damaged, decayed, or crowded to save, a simple extraction is the safest solution. Our gentle approach minimizes discomfort and promotes fast healing. We always discuss replacement options — such as implants or bridges — before and after the procedure.",
        benefits: ["Eliminates pain from damaged teeth", "Prevents spread of infection", "Creates space for proper alignment", "Quick procedure with fast healing"],
      },
      {
        name: "Digital X-Rays",
        slug: "digital-x-rays",
        shortDesc: "Low-radiation digital imaging for precise diagnosis.",
        longDesc: "Our digital X-ray technology uses up to 90% less radiation than traditional film X-rays and produces instant, high-resolution images. This allows us to detect cavities, bone loss, and other issues earlier and more accurately — leading to better treatment outcomes.",
        benefits: ["Up to 90% less radiation than film", "Instant high-resolution images", "Earlier detection of problems", "Easily stored and shared"],
      },
      {
        name: "Fluoride Treatment",
        slug: "fluoride-treatment",
        shortDesc: "Strengthens enamel and helps prevent cavities.",
        longDesc: "Professional fluoride treatments deliver a concentrated dose of this cavity-fighting mineral directly to your teeth. Fluoride remineralizes weakened enamel and makes teeth more resistant to acid attacks from bacteria and sugary foods. Recommended for both children and adults.",
        benefits: ["Strengthens tooth enamel", "Reduces cavity risk", "Quick in-office application", "Suitable for all ages"],
      },
      {
        name: "Panoramic X-Rays",
        slug: "panoramic-x-rays",
        shortDesc: "Full-mouth imaging to evaluate bone health.",
        longDesc: "A panoramic X-ray captures your entire mouth in a single image — all teeth, upper and lower jaws, sinuses, and surrounding structures. This comprehensive view helps us identify impacted teeth, bone abnormalities, jaw joint problems, and developing issues not visible in standard bitewing X-rays.",
        benefits: ["Complete view of all teeth and jaw", "Detects impacted wisdom teeth", "Evaluates bone health", "Guides treatment planning"],
      },
      {
        name: "Sealants",
        slug: "sealants",
        shortDesc: "Protective coating applied to the chewing surfaces of back teeth.",
        longDesc: "Dental sealants are thin, protective coatings painted onto the chewing surfaces of back teeth — where most cavities in children and teens occur. They fill in the deep grooves where food and bacteria hide, and can last several years with proper care.",
        benefits: ["Prevents cavities in hard-to-clean areas", "Quick and painless application", "Lasts several years", "Ideal for children and adults"],
      },
    ],
  },
  {
    name: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description: "Transform your smile with treatments that improve the color, shape, size, and alignment of your teeth. Our cosmetic procedures combine artistry with precision for naturally beautiful results.",
    services: [
      {
        name: "Opalescence® Teeth Whitening",
        slug: "opalescence-teeth-whitening",
        shortDesc: "Professional-grade whitening for dramatically brighter results.",
        longDesc: "Opalescence® is the gold standard in professional teeth whitening. Unlike over-the-counter products, our whitening systems use prescription-strength gel that penetrates deep into enamel to break up stains from coffee, wine, tobacco, and aging. Results are visible after a single session, with shades typically 4–8 levels brighter.",
        benefits: ["Up to 8 shades whiter", "In-office and take-home options", "Longer-lasting than store products", "Safe for enamel"],
      },
      {
        name: "Composite Fillings",
        slug: "composite-fillings",
        shortDesc: "Tooth-colored restorations that blend seamlessly.",
        longDesc: "Composite (tooth-colored) fillings use a resin material matched precisely to your natural tooth color. Unlike silver amalgam fillings, composites bond directly to the tooth, requiring less removal of healthy structure. They look completely natural and are ideal for both new cavities and replacing old metal fillings.",
        benefits: ["Matches your natural tooth color", "Requires less tooth removal", "Bonds directly to tooth structure", "Mercury-free material"],
      },
      {
        name: "Dental Implants",
        slug: "dental-implants",
        shortDesc: "Permanent, lifelike replacement for missing teeth.",
        longDesc: "Dental implants are the closest thing to a natural tooth that modern dentistry can offer. A titanium post is surgically placed into the jawbone, where it fuses over time and acts as a new root. A custom porcelain crown is then attached, creating a restoration that looks, feels, and functions just like a real tooth.",
        benefits: ["Looks and feels like a natural tooth", "Preserves jawbone health", "Lasts decades with proper care", "No removal required"],
      },
      {
        name: "Porcelain Crowns",
        slug: "porcelain-crowns-caps",
        shortDesc: "Custom-crafted caps that restore strength and appearance.",
        longDesc: "Porcelain crowns are custom-made caps that fit over a damaged or weakened tooth, restoring its shape, size, and function. Modern all-ceramic crowns are virtually indistinguishable from natural teeth. They're used to protect cracked teeth, restore broken or severely decayed teeth, and complete implant or root canal treatment.",
        benefits: ["Restores full tooth function", "Indistinguishable from natural teeth", "Protects weakened teeth", "Long-lasting and durable"],
      },
      {
        name: "Porcelain Fixed Bridges",
        slug: "porcelain-fixed-bridges",
        shortDesc: "Natural-looking replacement for one or more missing teeth.",
        longDesc: "A porcelain fixed bridge fills the gap left by one or more missing teeth using crowns on the adjacent teeth as anchors. The result is a non-removable, natural-looking restoration that restores your bite and prevents remaining teeth from shifting. Bridges are crafted to match the color and shape of your natural teeth.",
        benefits: ["Fixed, non-removable solution", "Restores bite and chewing function", "Prevents tooth shifting", "Custom-matched to natural teeth"],
      },
      {
        name: "Porcelain Veneers",
        slug: "porcelain-veneers",
        shortDesc: "Ultra-thin ceramic shells that perfect your smile.",
        longDesc: "Porcelain veneers are wafer-thin shells of dental ceramic bonded to the front surfaces of teeth. They can simultaneously correct color, shape, size, and minor alignment issues — often called a 'smile makeover in a visit.' Veneers are stain-resistant, incredibly durable, and crafted individually to complement your facial features.",
        benefits: ["Corrects color, shape, and size at once", "Stain-resistant surface", "Minimal tooth preparation required", "Results last 10-15+ years"],
      },
    ],
  },
  {
    name: "Orthodontics",
    slug: "orthodontics",
    description: "Straighter teeth without the metal. Modern clear aligner therapy delivers beautiful alignment results discreetly and comfortably.",
    services: [
      {
        name: "Invisalign®",
        slug: "invisalign",
        shortDesc: "Clear, removable aligners that gradually straighten teeth.",
        longDesc: "Invisalign® uses a series of custom-made, nearly invisible plastic aligners to gradually shift teeth into their ideal positions. Unlike traditional braces, aligners are removable — so you can eat anything you like and brush normally. Treatment typically takes 6–18 months depending on complexity. We'll create a digital preview of your final smile before you even start.",
        benefits: ["Nearly invisible aligners", "Removable for eating and cleaning", "No metal wires or brackets", "Digital preview of final results"],
      },
    ],
  },
  {
    name: "Periodontal Disease",
    slug: "periodontal-disease",
    description: "Gum disease is the leading cause of tooth loss in adults — and most people don't know they have it. Early diagnosis and treatment can save your teeth and your overall health.",
    services: [
      {
        name: "Periodontal Diagnosis",
        slug: "diagnosis",
        shortDesc: "Early detection and assessment of gum disease.",
        longDesc: "Our comprehensive periodontal evaluation includes probing pocket depths, assessing bone levels via X-rays, and evaluating tissue health. Early-stage gum disease (gingivitis) is reversible with proper treatment. Advanced disease (periodontitis) requires more aggressive therapy. The first step is an accurate diagnosis.",
        benefits: ["Early detection saves teeth", "Painless evaluation process", "Accurate staging of disease", "Clear treatment path"],
      },
      {
        name: "Periodontal Treatment",
        slug: "treatment",
        shortDesc: "Deep cleaning and targeted therapy to treat gum disease.",
        longDesc: "Scaling and root planing (deep cleaning) is the most common non-surgical treatment for gum disease. We remove plaque and tartar deposits from below the gumline, then smooth the root surfaces to help gum tissue reattach and prevent bacteria from re-accumulating. Local anesthetic ensures your comfort throughout.",
        benefits: ["Removes infection-causing deposits", "Performed with local anesthetic", "Halts disease progression", "Non-surgical option"],
      },
      {
        name: "Periodontal Maintenance",
        slug: "maintenance",
        shortDesc: "Ongoing care to keep gum disease from returning.",
        longDesc: "After active periodontal treatment, regular maintenance visits (typically every 3–4 months) are essential to keep the disease in remission. These visits include thorough cleanings, pocket depth monitoring, and early detection of any recurrence — preventing the need for more aggressive treatment in the future.",
        benefits: ["Prevents disease recurrence", "More thorough than standard cleaning", "Monitors pocket depths over time", "Protects your investment in treatment"],
      },
    ],
  },
  {
    name: "Periodontics",
    slug: "periodontics",
    description: "Specialized care for the health of your gums and the supporting structures of your teeth.",
    services: [
      {
        name: "Bruxism Treatment",
        slug: "bruxism",
        shortDesc: "Custom night guards and treatment for teeth grinding.",
        longDesc: "Bruxism — grinding or clenching teeth, often during sleep — can cause significant wear, fractures, jaw pain, and headaches. We fabricate custom night guards from impressions of your teeth, creating a precise fit that protects against grinding forces. We also evaluate for underlying causes such as TMJ dysfunction or stress.",
        benefits: ["Prevents tooth wear and fractures", "Relieves jaw pain and headaches", "Custom-fitted for comfort", "Protects existing dental work"],
      },
      {
        name: "Oral Cancer Exam",
        slug: "oral-cancer-exam",
        shortDesc: "Thorough examination to detect early signs of oral cancer.",
        longDesc: "Oral cancer is highly treatable when caught early — but often goes undetected until it's advanced. Our comprehensive oral cancer screening examines your lips, tongue, throat, and surrounding tissues for any suspicious changes. This quick, painless exam can literally be lifesaving and is included in every routine checkup.",
        benefits: ["Early detection dramatically improves outcomes", "Quick and completely painless", "Included in routine checkups", "Evaluates lips, tongue, throat, and tissues"],
      },
      {
        name: "Pocket Irrigation",
        slug: "pocket-irrigation",
        shortDesc: "Antimicrobial treatment to flush bacteria from gum pockets.",
        longDesc: "Pocket irrigation uses a targeted stream of antimicrobial solution to flush bacteria, debris, and toxins from the spaces between teeth and gums. It's particularly effective as an adjunct to scaling and root planing for patients with moderate to advanced gum disease, reducing bacterial counts and supporting healing.",
        benefits: ["Reduces harmful bacteria below gumline", "Supports healing after deep cleaning", "Non-invasive adjunct therapy", "Improves overall gum health"],
      },
      {
        name: "Prophylaxis (Teeth Cleaning)",
        slug: "prophylaxis-teeth-cleaning",
        shortDesc: "Professional preventive cleaning for healthy gum tissue.",
        longDesc: "A professional prophylaxis (cleaning) removes soft plaque and hardened tartar deposits that can't be eliminated by brushing and flossing alone. Our hygienists use ultrasonic scalers and hand instruments to clean every surface thoroughly, then polish teeth to remove surface stains and leave a smooth finish that resists future buildup.",
        benefits: ["Removes plaque and tartar", "Polishes away surface stains", "Prevents gum disease progression", "Freshens breath"],
      },
    ],
  },
  {
    name: "Oral & Maxillofacial Surgery",
    slug: "oral-maxillofacial-surgery",
    description: "Advanced surgical procedures performed with precision, skill, and a commitment to your comfort from start to finish.",
    services: [
      {
        name: "Tooth Extractions",
        slug: "tooth-extractions",
        shortDesc: "Gentle removal of damaged or impacted teeth.",
        longDesc: "When a tooth cannot be saved through other means, extraction becomes necessary to protect surrounding teeth and bone. We use local anesthesia to ensure a completely comfortable experience, and follow a careful technique to minimize trauma to surrounding tissue. We'll always discuss your replacement options before and after.",
        benefits: ["Gentle, comfortable procedure", "Preserves surrounding bone and tissue", "Prevents spread of infection", "Replacement options discussed"],
      },
      {
        name: "Wisdom Teeth Extractions",
        slug: "wisdom-teeth-extractions",
        shortDesc: "Safe extraction of wisdom teeth to prevent crowding.",
        longDesc: "Most people don't have enough room in their jaws for wisdom teeth to erupt properly, leading to impaction, crowding, pain, and infection risk. We evaluate wisdom teeth with panoramic X-rays to determine the ideal timing and approach for removal. The procedure is performed comfortably under local anesthesia.",
        benefits: ["Prevents crowding and impaction", "Eliminates wisdom tooth pain", "Reduces infection risk", "Comfortable procedure under local anesthesia"],
      },
      {
        name: "Dental Implants",
        slug: "dental-implants",
        shortDesc: "Surgical placement of implant posts for permanent tooth replacement.",
        longDesc: "The implant placement procedure involves surgically inserting a small titanium post into the jawbone beneath the missing tooth. Over the following weeks, the implant fuses with bone through a natural process called osseointegration. Once fully integrated, a custom crown is attached — creating a permanent, natural-feeling replacement.",
        benefits: ["Permanent solution to tooth loss", "Stimulates and preserves jawbone", "No impact on adjacent teeth", "Functions like a natural tooth root"],
      },
      {
        name: "TMJ Dysfunction Treatment",
        slug: "tmj-temporomandibular-joint-dysfunction",
        shortDesc: "Relief from jaw pain and temporomandibular disorders.",
        longDesc: "Temporomandibular joint (TMJ) dysfunction can cause debilitating jaw pain, clicking, locking, headaches, and neck pain. We offer a range of conservative treatments including custom splints, bite adjustments, and jaw exercises. Early intervention can prevent the condition from progressing to more complex problems.",
        benefits: ["Relieves jaw pain and clicking", "Reduces headaches and neck pain", "Conservative non-surgical approach", "Custom splints for lasting relief"],
      },
    ],
  },
  {
    name: "Endodontics",
    slug: "endodontics",
    description: "Root canal therapy has an undeserved reputation. Modern techniques make it virtually painless — and it saves natural teeth that would otherwise be lost.",
    services: [
      {
        name: "Root Canal Therapy",
        slug: "root-canal-therapy",
        shortDesc: "Pain-relieving treatment that removes infection and saves your tooth.",
        longDesc: "A root canal becomes necessary when the soft tissue (pulp) inside a tooth becomes infected or inflamed due to deep decay, a crack, or repeated dental procedures. During treatment, we remove the infected pulp, clean and shape the root canals, then seal them to prevent re-infection. The tooth is then restored with a crown. With modern anesthesia, most patients report little to no discomfort — often less than a standard filling.",
        benefits: ["Saves your natural tooth", "Eliminates infection and pain", "Modern techniques are virtually painless", "Restored with a durable crown"],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServiceBySlug(categorySlug: string, serviceSlug: string): { category: ServiceCategory; service: ServiceItem } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const service = category.services.find((s) => s.slug === serviceSlug);
  if (!service) return undefined;
  return { category, service };
}
