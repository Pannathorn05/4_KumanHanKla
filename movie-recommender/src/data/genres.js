export const GENRES = [
  {
    id: "action",
    name: "Action",
    thaiName: "แอ็กชัน",
    description: "เน้นฉากบู๊ เร้าใจ ความมัน",
    subgenres: [
      { id: "martial-arts", name: "Martial Arts", thai: "ศิลปะการต่อสู้ (Ip Man)" },
      { id: "superhero", name: "Superhero Action", thai: "ฮีโร่พลังพิเศษ (Avengers)" },
      { id: "spy", name: "Spy/Secret Agent", thai: "สายลับ (James Bond, MI)" },
      { id: "military", name: "Military Action", thai: "แอ็กชันทหาร" },
      { id: "disaster", name: "Disaster Action", thai: "ภัยพิบัติ (San Andreas)" },
      { id: "adventure-action", name: "Adventure-Action", thai: "ผจญภัย+แอ็กชัน (Indiana Jones)" }
    ]
  },
  {
    id: "drama",
    name: "Drama",
    thaiName: "ดราม่า",
    description: "เข้มข้น อารมณ์ลึก",
    subgenres: [
      { id: "family-drama", name: "Family Drama", thai: "ครอบครัว" },
      { id: "romantic-drama", name: "Romantic Drama", thai: "ความรักเศร้าๆ (La La Land)" },
      { id: "legal", name: "Legal/Court Drama", thai: "ศาล ความยุติธรรม" },
      { id: "medical", name: "Medical Drama", thai: "แพทย์/โรงพยาบาล" },
      { id: "biography", name: "Biography Drama", thai: "อิงชีวิตจริง" },
      { id: "social", name: "Social Drama", thai: "ประเด็นสังคม" }
    ]
  },
  {
    id: "romance",
    name: "Romance",
    thaiName: "โรแมนซ์",
    description: "ความรัก ความสัมพันธ์",
    subgenres: [
      { id: "rom-com", name: "Romantic Comedy", thai: "ตลกหวาน" },
      { id: "romance-drama", name: "Romantic Drama", thai: "ดราม่ารัก" },
      { id: "teen", name: "Teen/Young Adult Romance", thai: "รักวัยรุ่น" },
      { id: "fantasy-romance", name: "Fantasy Romance", thai: "รักเหนือธรรมชาติ" },
      { id: "lgbtq", name: "LGBTQ+ Romance", thai: "" }
    ]
  },
  {
    id: "horror",
    name: "Horror",
    thaiName: "สยองขวัญ",
    description: "น่ากลัว หลอน ผี ปีศาจ",
    subgenres: [
      { id: "supernatural-horror", name: "Supernatural Horror", thai: "ผี/วิญญาณ (The Conjuring)" },
      { id: "psychological-horror", name: "Psychological Horror", thai: "หลอนด้านจิตใจ (Hereditary)" },
      { id: "slasher", name: "Slasher", thai: "ฆาตกร ไล่ฆ่า" },
      { id: "body-horror", name: "Body Horror", thai: "ร่างกายผิดรูป" },
      { id: "gore", name: "Gore/Extreme Horror", thai: "โหด เลือดสาด" },
      { id: "folk", name: "Folk Horror", thai: "ความเชื่อท้องถิ่น" },
      { id: "found-footage", name: "Found Footage", thai: "กล้องมือถือ (Paranormal Activity)" }
    ]
  },
  {
    id: "fantasy",
    name: "Fantasy",
    thaiName: "แฟนตาซี",
    description: "เวทมนต์ โลกเหนือจริง",
    subgenres: [
      { id: "high-fantasy", name: "High Fantasy", thai: "โลกใหม่เต็มรูปแบบ (LOTR)" },
      { id: "urban-fantasy", name: "Urban Fantasy", thai: "แฟนตาซีในโลกจริง" },
      { id: "fairy-tale", name: "Fairy Tale", thai: "นิทาน" },
      { id: "mythology", name: "Mythology-based", thai: "เทพปกรณัม" }
    ]
  }
];
