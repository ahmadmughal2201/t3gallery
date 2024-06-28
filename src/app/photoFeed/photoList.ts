export type PhotoMetaData = {
    id: string;
    title: string;
    description: string;
    url: string;
    dateUploaded: string;
    likes: number;
  };
  
  const photoList: PhotoMetaData[] = [
    {
      id: "1",
      title: "Sunset Bliss",
      description: "A beautiful sunset over the mountains.",
      url: require('./photos/1.jpg').default,
      dateUploaded: "2024-06-21",
      likes: 120,
    },
    {
      id: "2",
      title: "Ocean View",
      description: "A calm ocean view with a clear sky.",
      url: require('./photos/2.jpg').default,
      dateUploaded: "2024-06-21",
      likes: 98,
    },
    {
      id: "3",
      title: "Forest Trail",
      description: "A serene forest trail covered in autumn leaves.",
      url: require('./photos/3.jpg').default,
      dateUploaded: "2024-06-21",
      likes: 110,
    },
    {
      id: "4",
      title: "City Lights",
      description: "A bustling city skyline at night.",
      url: require('./photos/4.jpg').default,
      dateUploaded: "2024-06-21",
      likes: 75,
    },
    {
      id: "5",
      title: "Desert Dunes",
      description: "Golden sand dunes under the bright sun.",
      url: require('./photos/5.jpg').default,
      dateUploaded: "2024-06-21",
      likes: 60,
    },
    {
      id: "6",
      title: "Snowy Peak",
      description: "A snowy mountain peak touching the clouds.",
      url: require('./photos/6.jpg').default,
      dateUploaded: "2024-06-21",
      likes: 85,
    },
  ];
  
  export default photoList;
  