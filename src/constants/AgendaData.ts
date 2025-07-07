export interface AgendaItem {
  id: string;
  startTime: string;
  endTime: string;
  duration: number;
  sessionType: 'General' | 'Keynote' | 'AI' | 'Flutter' | 'Panel' | 'Cloud' | 'Web' | 'Activity' | 'Fireside chat' | 'Workshop';
  title: string;
  speaker?: string;
  category: 'Tech' | 'Non Tech' | 'Workshop';
  isSpecial?: boolean;
  specialType?: 'break' | 'lunch' | 'picture';
  room?: string;
}

export const agendaData: AgendaItem[] = [
  {
    id: '1',
    startTime: '10:10',
    endTime: '10:25',
    duration: 15,
    sessionType: 'General',
    title: 'Karachi Community Address',
    speaker: 'Danella Patrick and Hassam Jawed',
    category: 'Non Tech'
  },
  {
    id: '2',
    startTime: '10:25',
    endTime: '10:50',
    duration: 25,
    sessionType: 'Keynote',
    title: 'Welcome Note',
    speaker: 'Farhan Qureshi',
    category: 'Non Tech'
  },
  {
    id: '3',
    startTime: '10:50',
    endTime: '11:15',
    duration: 25,
    sessionType: 'General',
    title: 'Future of AI: Perspectives for Startups',
    speaker: 'Fannie Soubiele',
    category: 'Tech'
  },
  {
    id: '4',
    startTime: '11:15',
    endTime: '11:40',
    duration: 25,
    sessionType: 'General',
    title: 'Google Startup Program - in Pakistan',
    speaker: 'Esna Ong',
    category: 'Tech'
  },
  {
    id: '5',
    startTime: '11:40',
    endTime: '12:15',
    duration: 35,
    sessionType: 'Fireside chat',
    title: 'Unshaken: Jehan Ara\'s journey of building, belonging, and breaking barriers',
    speaker: 'Jehan Ara - moderated by Hira Tariq',
    category: 'Non Tech'
  },
  {
    id: '6',
    startTime: '12:15',
    endTime: '12:40',
    duration: 25,
    sessionType: 'General',
    title: 'Building agentic workflows with Google\'s Agent Development Kit (ADK)',
    speaker: 'Tahreem Rasul',
    category: 'Non Tech'
  },
  {
    id: '7',
    startTime: '12:15',
    endTime: '13:05',
    duration: 50,
    sessionType: 'Flutter',
    title: 'Tech philosophy around Flutter, AI, & Google\'s Agent Development Kit',
    speaker: 'Waleed Arshad',
    category: 'Tech'
  },
  {
    id: '8',
    startTime: '12:40',
    endTime: '13:10',
    duration: 30,
    sessionType: 'AI',
    title: 'Beyond the IDE - Unlocking Productivity with AI Agents and Gemini CLI',
    speaker: 'Mashood Rastgar',
    category: 'Tech'
  },
  {
    id: '9',
    startTime: '13:05',
    endTime: '13:15',
    duration: 10,
    sessionType: 'Activity',
    title: 'Picture Time',
    category: 'Non Tech',
    isSpecial: true,
    specialType: 'picture'
  },
  {
    id: '10',
    startTime: '13:10',
    endTime: '14:00',
    duration: 50,
    sessionType: 'Activity',
    title: 'LUNCH',
    category: 'Non Tech',
    isSpecial: true,
    specialType: 'lunch'
  },
  {
    id: '11',
    startTime: '14:00',
    endTime: '14:25',
    duration: 25,
    sessionType: 'AI',
    title: 'Building Apps in Minutes with Google Stitch + Firebase Suite',
    speaker: 'Hassam Jawed',
    category: 'Tech'
  },
  {
    id: '12',
    startTime: '14:25',
    endTime: '14:50',
    duration: 25,
    sessionType: 'AI',
    title: 'Solving Real-World Problems with Specialized AI Teams: A Vertical Agent Approach leveraging Google ADK, A2A, and MCP',
    speaker: 'Jaya Rajwani',
    category: 'Tech'
  },
  {
    id: '13',
    startTime: '14:50',
    endTime: '15:10',
    duration: 20,
    sessionType: 'General',
    title: 'Developer Community Address',
    speaker: 'Huzaifa Habib',
    category: 'Non Tech'
  },
  {
    id: '14',
    startTime: '15:10',
    endTime: '15:50',
    duration: 40,
    sessionType: 'Panel',
    title: 'Beyond features: Thinking like a Product Engineer',
    speaker: 'Moderator: Nabeel Ahmed, Panelists: Talha Ashraf, Saad Pasta, Naveed, Huma Imam',
    category: 'Tech'
  },
  {
    id: '15',
    startTime: '15:50',
    endTime: '16:15',
    duration: 25,
    sessionType: 'Cloud',
    title: 'Build AI Agents with Google Cloud',
    speaker: 'Harris Solangi',
    category: 'Tech'
  },
  {
    id: '16',
    startTime: '16:15',
    endTime: '16:40',
    duration: 25,
    sessionType: 'Flutter',
    title: 'What AI Can\'t Replace: Crafting Delightful Mobile Experience with Flutter',
    speaker: 'Sakina Abbas',
    category: 'Tech'
  },
  {
    id: '17',
    startTime: '16:40',
    endTime: '17:20',
    duration: 40,
    sessionType: 'Panel',
    title: 'Responsible AI: Adoption Across Domains Managing Ethics, Jobs and Compliance',
    speaker: 'Moderator: Ali Bin Shaheen Panel: Hasan Habib, Aaqib Sayed, Lareb Amir, Hafsa, Zartaj Ahmed',
    category: 'Tech'
  },
  {
    id: '18',
    startTime: '17:20',
    endTime: '17:45',
    duration: 25,
    sessionType: 'AI',
    title: 'The obsession with MCP: As a Guy Who Knows a Guy',
    speaker: 'Raheel Siddiqui',
    category: 'Non Tech'
  },
  {
    id: '19',
    startTime: '17:45',
    endTime: '18:10',
    duration: 25,
    sessionType: 'Web',
    title: 'Crafting Code in the Age of AI',
    speaker: 'Saleha Shujaat',
    category: 'Tech'
  },
  {
    id: '20',
    startTime: '18:10',
    endTime: '18:20',
    duration: 10,
    sessionType: 'Activity',
    title: 'CLOSING AND THANKING SPONSORS',
    category: 'Non Tech',
    isSpecial: true,
    specialType: 'break'
  },
  // Workshop Room 1 - Ashritech Room 1
  {
    id: 'w1',
    startTime: '11:00',
    endTime: '13:00',
    duration: 120,
    sessionType: 'Workshop',
    title: 'Gemma common use cases - Illustrate some common use cases for Gemma, CodeGemma and PaliGemma',
    speaker: 'Adnan Zaidi',
    category: 'Workshop',
    room: 'Ashritech Room 1'
  },
  {
    id: 'w3',
    startTime: '14:00',
    endTime: '16:00',
    duration: 120,
    sessionType: 'Workshop',
    title: 'Deep Dive into Gemini SDK',
    speaker: 'Mashood Rastgyr',
    category: 'Workshop',
    room: 'Ashritech Room 1'
  },
  // Workshop Room 2 - Ashritech Room 2
  {
    id: 'w4',
    startTime: '11:10',
    endTime: '13:10',
    duration: 120,
    sessionType: 'Workshop',
    title: 'Build AI agents with Google ADK',
    speaker: 'Talal Ahmed',
    category: 'Workshop',
    room: 'Ashritech Room 2'
  },
  {
    id: 'w6',
    startTime: '14:10',
    endTime: '16:10',
    duration: 120,
    sessionType: 'Workshop',
    title: 'Rapid App Development using Firebase Studio',
    speaker: 'Hafiz Abdul Munim and Muhammad Aashir Khan',
    category: 'Workshop',
    room: 'Ashritech Room 2'
  }
]; 