export interface IslamicHoliday {
  id: string;
  name: string;
  month: number;
  day: number;
  description: string;
  category: "major" | "special";
  icon: string;
  detailedInfo: {
    origin: string;
    historicalSignificance: string;
    religiousImportance: string;
    whyCelebrated: string;
    traditions: string[];
    islamicReferences: string[];
  };
}

export const islamicHolidaysData: IslamicHoliday[] = [
  {
    id: "new-year",
    name: "Islamic New Year",
    month: 1,
    day: 1,
    description: "Beginning of the new Hijri year",
    category: "major",
    icon: "Calendar",
    detailedInfo: {
      origin: "This day marks the migration (Hijrah) of the Prophet Muhammad (PBUH) from Makkah to Madinah in 622 CE, known as the Hijrah of the Prophet.",
      historicalSignificance: "The Hijrah was a pivotal turning point in Islamic history, as the Prophet established the first Islamic state in Madinah. This event was not just a geographical move but the beginning of a new era for Muslims.",
      religiousImportance: "The Hijrah teaches us about reliance on God and patience in times of trial. It also reminds us of the importance of brotherhood in Islam, as the Ansar (Helpers) welcomed the Muhajireen (Emigrants) with love and generosity.",
      whyCelebrated: "We commemorate this day to remember the importance of Hijrah in building Islamic civilization and to draw lessons of patience, trust in God, and Islamic brotherhood.",
      traditions: [
        "Reciting Surah At-Tawbah which tells the story of Hijrah",
        "Making supplications and remembrance of Allah",
        "Reflecting on the lessons of Hijrah",
        "Strengthening family ties and doing good to others"
      ],
      islamicReferences: [
        "Allah says: 'If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave...' - Surah At-Tawbah",
        "Hadith: 'Deeds are but by intentions...' - Bukhari & Muslim"
      ]
    }
  },
  {
    id: "ashura",
    name: "Day of Ashura",
    month: 1,
    day: 10,
    description: "A recommended day of fasting and commemoration of Prophet Moses' salvation",
    category: "major",
    icon: "Star",
    detailedInfo: {
      origin: "The Day of Ashura is the 10th of Muharram. It was observed as a day of fasting even before Islam. The Prophet (PBUH) used to fast on this day in Makkah, and when he migrated to Madinah, he found the Jews fasting on this day.",
      historicalSignificance: "On this day, Allah saved Prophet Moses and his people from Pharaoh and his army by parting the sea for them. Many other significant historical events also occurred on this day.",
      religiousImportance: "Fasting on the Day of Ashura expiates the sins of the past year, as mentioned in authentic hadiths. It is one of the blessed days when worship is highly recommended.",
      whyCelebrated: "We commemorate this day to thank Allah for His blessings, remember His great power in supporting His allies, and follow the Sunnah of the Prophet in fasting on this day.",
      traditions: [
        "Fasting on the 10th of Muharram and the day before or after it",
        "Increasing in remembrance and supplications",
        "Reading the Quran and reflecting on the story of Prophet Moses",
        "Giving charity and being kind to the poor"
      ],
      islamicReferences: [
        "Hadith: 'Fasting the day of Ashura, I hope, will expiate the sins of the previous year' - Muslim",
        "Allah says: 'And We inspired Moses, 'Strike with your staff the sea,' and it parted...' - Surah Ash-Shu'ara"
      ]
    }
  },
  {
    id: "mawlid",
    name: "Mawlid al-Nabi",
    month: 3,
    day: 12,
    description: "Birth of the Prophet Muhammad (PBUH)",
    category: "major",
    icon: "Heart",
    detailedInfo: {
      origin: "The Prophet Muhammad (PBUH) was born in Makkah on the 12th of Rabi' al-Awwal, in the Year of the Elephant, approximately 571 CE.",
      historicalSignificance: "The birth of the Prophet (PBUH) was a light that illuminated the world, as he came to bring people out of darkness into light, from worshiping creation to worshiping the Creator.",
      religiousImportance: "This day reminds us of Allah's mercy to the worlds, as He sent us the best of creation and the seal of the prophets. It's a day to remember the noble character and biography of the Prophet (PBUH).",
      whyCelebrated: "We celebrate this day out of love for the Prophet (PBUH), to remember his noble biography, and to renew our pledge to follow his Sunnah and follow his blessed path.",
      traditions: [
        "Reading the Prophet's biography",
        "Increasing prayers upon the Prophet (PBUH)",
        "Studying the Prophet's character and manners",
        "Holding religious gatherings and lessons about the Prophet"
      ],
      islamicReferences: [
        "Allah says: 'And We have not sent you, [O Muhammad], except as a mercy to the worlds' - Surah Al-Anbiya",
        "Allah says: 'There has certainly been for you in the Messenger of Allah an excellent pattern...' - Surah Al-Ahzab"
      ]
    }
  },
  {
    id: "isra-miraj",
    name: "Night Journey & Ascension",
    month: 7,
    day: 27,
    description: "The Prophet's miraculous night journey from Makkah to Jerusalem",
    category: "special",
    icon: "Star",
    detailedInfo: {
      origin: "On this blessed night, the Prophet Muhammad (PBUH) was taken on a night journey from the Sacred Mosque in Makkah to Al-Aqsa Mosque in Jerusalem, and then ascended through the heavens.",
      historicalSignificance: "This great miracle occurred during a difficult period of the Prophet's mission, after the death of his uncle Abu Talib and his wife Khadijah (may Allah be pleased with her), serving as comfort and honor from Allah to His Prophet.",
      religiousImportance: "During this journey, the five daily prayers were ordained, and the Prophet met the previous prophets and led them in prayer. He also witnessed great signs of his Lord, the gardens of Paradise, and the punishment of Hellfire.",
      whyCelebrated: "We commemorate this night to remember the greatness of this miracle and the high status of our Prophet before Allah, and to renew our faith and certainty in Allah's great power.",
      traditions: [
        "Increasing in prayers and remembrance of Allah during this night",
        "Reading and reflecting on Surah Al-Isra",
        "Making supplications, seeking forgiveness, and sincere repentance",
        "Remembering the status of the blessed Al-Aqsa Mosque"
      ],
      islamicReferences: [
        "Allah says: 'Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa...' - Surah Al-Isra",
        "The detailed hadith of the Night Journey in Sahih Bukhari and Muslim"
      ]
    }
  },
  {
    id: "shaban-mid",
    name: "Mid-Sha'ban Night",
    month: 8,
    day: 15,
    description: "A blessed night recommended for worship and forgiveness",
    category: "special",
    icon: "Moon",
    detailedInfo: {
      origin: "The Night of Mid-Sha'ban is the 15th night of Sha'ban, one of the blessed nights in the Islamic calendar.",
      historicalSignificance: "This night holds a special place in the hearts of Muslims throughout history, as they would spend it in worship, supplication, and seeking forgiveness in preparation for Ramadan.",
      religiousImportance: "On this night, Allah descends to the lowest heaven and forgives those who seek His forgiveness. It is a night of repentance, forgiveness, and mercy from Allah.",
      whyCelebrated: "We commemorate this night seeking Allah's forgiveness and mercy, and as spiritual preparation to welcome the blessed month of Ramadan with pure hearts and repentant souls.",
      traditions: [
        "Spending the night in prayer and remembrance",
        "Increasing in seeking forgiveness and repentance",
        "Reading the Quran and reflecting on its verses",
        "Making supplications for parents and deceased loved ones"
      ],
      islamicReferences: [
        "Hadith: 'Allah looks at His creation on the night of mid-Sha'ban and forgives all of them except the one who associates partners with Him or the one who harbors hatred' - Ibn Majah",
        "Allah says: 'Indeed, Allah loves those who are constantly repentant and loves those who purify themselves' - Surah Al-Baqarah"
      ]
    }
  },
  {
    id: "ramadan-start",
    name: "Beginning of Ramadan",
    month: 9,
    day: 1,
    description: "Month of Fasting, Quran, and Worship",
    category: "major",
    icon: "Moon",
    detailedInfo: {
      origin: "The blessed month of Ramadan is the ninth month of the Islamic calendar, in which fasting was made obligatory for Muslims in the second year after Hijrah.",
      historicalSignificance: "In this blessed month, the Quran was revealed, and significant events like the Battle of Badr and the Conquest of Makkah took place in Islamic history.",
      religiousImportance: "Fasting in Ramadan is one of the five pillars of Islam. It is a month when rewards are multiplied, the gates of Paradise are opened, and the gates of Hellfire are closed.",
      whyCelebrated: "We welcome Ramadan with joy and happiness because it is a month of forgiveness, mercy, and salvation from the Hellfire. It is an opportunity for repentance, purification, and drawing closer to Allah.",
      traditions: [
        "Fasting from dawn to sunset",
        "Night prayers (Taraweeh)",
        "Increased recitation of the Quran",
        "Giving charity and being kind to the poor"
      ],
      islamicReferences: [
        "Allah says: 'O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous' - Surah Al-Baqarah",
        "Hadith: 'Whoever fasts Ramadan out of faith and seeking reward, his previous sins will be forgiven' - Bukhari & Muslim"
      ]
    }
  },
  {
    id: "laylat-qadr",
    name: "Night of Decree (estimated)",
    month: 9,
    day: 27,
    description: "Better than a thousand months - The odd nights of the last ten days",
    category: "special",
    icon: "Star",
    detailedInfo: {
      origin: "The Night of Decree is the night when the Quran was first revealed, occurring in the last ten nights of Ramadan, particularly on the odd-numbered nights.",
      historicalSignificance: "On this blessed night, the revelation of the Quran began to Prophet Muhammad (PBUH) in the Cave of Hira, marking the beginning of the final message to humanity.",
      religiousImportance: "The Night of Decree is better than a thousand months, meaning worship in it is equivalent to worshiping for more than 83 years. The angels and the Spirit descend by permission of their Lord for every matter.",
      whyCelebrated: "We observe this night in worship, supplication, and remembrance, seeking the great reward and forgiveness, following the Sunnah of the Prophet who used to seclude himself in the mosque during the last ten nights of Ramadan.",
      traditions: [
        "I'tikaf (seclusion in the mosque) during the last ten nights",
        "Spending the night in prayer, remembrance, and supplication",
        "Reciting and reflecting on the Quran",
        "Frequently reciting the supplication: 'O Allah, You are Forgiving and love forgiveness, so forgive me'"
      ],
      islamicReferences: [
        "Allah says: 'Indeed, We sent the Quran down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months' - Surah Al-Qadr",
        "Hadith: 'Whoever stands (in prayer) during the Night of Decree out of faith and seeking reward, his previous sins will be forgiven' - Bukhari & Muslim"
      ]
    }
  },
  {
    id: "eid-fitr",
    name: "Eid al-Fitr",
    month: 10,
    day: 1,
    description: "Festival of Breaking the Fast",
    category: "major",
    icon: "Heart",
    detailedInfo: {
      origin: "Eid al-Fitr is the first day of Shawwal, coming after the end of Ramadan. This Eid was prescribed in the second year after Hijrah.",
      historicalSignificance: "This Eid marks the end of the month of fasting and the beginning of days of joy and happiness. The Prophet (PBUH) used to celebrate this day and encouraged Muslims to be happy and joyful.",
      religiousImportance: "On this day, Zakat al-Fitr is given, the Eid prayer is performed, and it is recommended to say the Takbeer and Tahleel. It is a day of thanking Allah for completing the fast and accepting good deeds.",
      whyCelebrated: "We celebrate Eid al-Fitr, rejoicing in the completion of Allah's favor upon us, thanking Him for enabling us to fast Ramadan, and being happy with the coming days of joy and happiness.",
      traditions: [
        "Performing the Eid prayer in the mosque or prayer ground",
        "Giving Zakat al-Fitr before the Eid prayer",
        "Saying the Takbeer, Tahleel, and Tahmeed",
        "Maintaining family ties and exchanging greetings and gifts"
      ],
      islamicReferences: [
        "Allah says: 'And [wants for you] to complete the period and to glorify Allah for that [to] which He has guided you; and perhaps you will be grateful' - Surah Al-Baqarah",
        "Hadith: 'Every people have their festival, and this is our festival' - Bukhari & Muslim"
      ]
    }
  },
  {
    id: "arafat-day",
    name: "Day of Arafah",
    month: 12,
    day: 9,
    description: "The day of Hajj and recommended fasting for non-pilgrims",
    category: "major",
    icon: "Star",
    detailedInfo: {
      origin: "The Day of Arafah is the 9th of Dhu al-Hijjah, the day when pilgrims stand at Mount Arafah, which is the greatest pillar of Hajj.",
      historicalSignificance: "At Mount Arafah, the Prophet (PBUH) delivered his Farewell Sermon during his Farewell Pilgrimage, and the verse of the perfection of religion and completion of divine favor was revealed.",
      religiousImportance: "This is the day when Allah perfected the religion and completed His favor upon the Muslims. Fasting on this day expiates the sins of two years: the past one and the coming one.",
      whyCelebrated: "We commemorate this day because it is the day of the perfection of religion. We fast on it seeking great reward and forgiveness, and we increase in supplication, remembrance, and seeking forgiveness.",
      traditions: [
        "Fasting for those not performing Hajj",
        "Increasing in supplications and remembrance of Allah",
        "Reciting the Quran and reflecting on its verses",
        "Giving charity and being kind to the poor and needy"
      ],
      islamicReferences: [
        "Allah says: 'This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion' - Surah Al-Ma'idah",
        "Hadith: 'Fasting on the Day of Arafah, I hope from Allah, expiates for the sins of the year before and the year after' - Muslim"
      ]
    }
  },
  {
    id: "eid-adha",
    name: "Eid al-Adha",
    month: 12,
    day: 10,
    description: "Festival of Sacrifice",
    category: "major",
    icon: "Heart",
    detailedInfo: {
      origin: "Eid al-Adha is the 10th of Dhu al-Hijjah, coming after the Day of Arafah. It is also called the Greater Eid and is one of the most important Islamic festivals.",
      historicalSignificance: "This Eid revives the memory of the sacrifice of Prophet Ibrahim (AS), when he was ready to sacrifice his son Ismail as an offering to Allah, but Allah ransomed him with a great sacrifice.",
      religiousImportance: "On this day, Muslims offer animal sacrifices as an act of worship to Allah, following the Sunnah of Ibrahim (AS). The Eid prayer is performed, and Muslims glorify Allah.",
      whyCelebrated: "We celebrate Eid al-Adha in remembrance of the sacrifice of Ibrahim (AS) and his obedience to Allah, and we offer sacrifices to draw nearer to Allah and thank Him for His blessings.",
      traditions: [
        "Performing the Eid prayer in the mosque or prayer ground",
        "Offering the sacrifice for those who can afford it",
        "Saying the Takbeer from the dawn of Arafah until the afternoon of the last day of Tashreeq",
        "Distributing the sacrificial meat to the poor and relatives"
      ],
      islamicReferences: [
        "Allah says: 'And when they had both submitted and he put him down upon his forehead, We called to him, 'O Abraham, You have fulfilled the vision...' - Surah As-Saffat",
        "Allah says: 'So pray to your Lord and sacrifice [to Him alone]' - Surah Al-Kawthar"
      ]
    }
  },
  {
    id: "tashriq-days",
    name: "Days of Tashreeq",
    month: 12,
    day: 11,
    description: "Days of eating, drinking, and remembering Allah (11th-13th Dhu al-Hijjah)",
    category: "special",
    icon: "Calendar",
    detailedInfo: {
      origin: "The Days of Tashreeq are the three days following Eid al-Adha (11th, 12th, and 13th of Dhu al-Hijjah). They are called Tashreeq because the meat of sacrifices was dried in the sun during these days.",
      historicalSignificance: "These days are part of the Hajj rituals, where pilgrims perform the stoning of the Jamarat and remember Allah abundantly. They are an extension of the joy of Eid al-Adha.",
      religiousImportance: "These are days of eating, drinking, and remembering Allah as described by the Prophet (PBUH). It is recommended to say the Takbeer, Tahmeed, and Tahleel during these days, which are among the appointed days mentioned in the Quran.",
      whyCelebrated: "We celebrate the Days of Tashreeq as a continuation of the Eid's joy, remembering Allah's blessings, and following the Sunnah of the Prophet in saying the Takbeer and remembrance.",
      traditions: [
        "Saying the restricted Takbeer after every obligatory prayer",
        "Increasing in the remembrance of Allah, Tahmeed, and Tahleel",
        "Eating from the sacrificial meat and enjoying halal food",
        "Maintaining family ties and visiting relatives and friends"
      ],
      islamicReferences: [
        "Hadith: 'The days of Tashreeq are days of eating, drinking, and remembrance of Allah' - Muslim",
        "Allah says: 'And remember Allah during [specific] numbered days' - Surah Al-Baqarah"
      ]
    }
  }
];

// Helper function to get holiday by month and day
export const getHolidayByDate = (month: number, day: number): IslamicHoliday | null => {
  return islamicHolidaysData.find(holiday => holiday.month === month && holiday.day === day) || null;
};

// Helper function to get holiday by ID
export const getHolidayById = (id: string): IslamicHoliday | null => {
  return islamicHolidaysData.find(holiday => holiday.id === id) || null;
};