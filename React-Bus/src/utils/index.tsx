export interface BusPassenger {
    seatNumber: string;
    gender: string;
  }
  
  export interface Bus {
    id: number;
    name: string;
    source: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    price: string;
    availableDates: string[];
    busType: string;
    numberOfSeats: number;
    seatLayout: {
      first: (number[] | number)[];
      second?: (number[] | number)[];
      third?: (number[] | number)[];
      fourth?: (number[] | number)[];
    };
    availableSeats: string[];
    availableSeatsGender?: { [key: string]: string }; 
  }

  
export const Buses=[
    {
        id:1,
        name:"İstanbul Express",
        source:"İstanbul",
        destination:"Ankara",
        departureTime:"06.00 AM",
        arrivalTime:"12.30 PM",
        price:"$600",
        availableDates:["2024-01-15","2024-01-16","2024-01-17","2024-01-18","2024-01-13","2024-01-14","2024-01-19"],
        busType:"Economy",
        numberOfSeats:36,
        seatLayout:{
            first:[
                [1,3,5,7,9,11,13,15,17,19],
            ],
            second:[2,4,6,8,10,12,14,16,18,20],
            third:[
                [21,23,25,27,29,31,33,35,37,39],
            ],
            fourth:[
                [22,24,26,28,30,32,34,36,38,40],
            ]
    },
    availableSeats:["9","2","31","4","16","6","20","33","40","22","25","32","36","11","7"],
    },
    {
        id:2,
        name:"Ankara Express",
        source:"Ankara",
        destination:"İstanbul",
        departureTime:"07.00 AM",
        arrivalTime:"15.30 PM",
        price:"$900",
        availableDates:["2024-01-15","2024-01-16","2024-01-17","2024-01-18","2024-01-13","2024-01-14","2024-01-19"],
        busType:"Business",
        numberOfSeats:20,
        seatLayout:{
            first:[
                [1,3,5,7,9,11,13,15,17,19],
            ],
            second:[2,4,6,8,10,12,14,16,18,20],
            third:[
                [21,23,25,27,29,31,33,35,37,39],
            ],
            fourth:[
                [22,24,26,28,30,32,34,36,38,40],
            ]
        },
        availableSeats:["9","2","31","4","16","6","20","33","40","22","25","32","36","11","7"],
    },
    
    {
        id:3,
        name:"İzmir Express",
        source:"İzmir",
        destination:"İstanbul",
        departureTime:"09.00 AM",
        arrivalTime:"11.30 PM",
        price:"$500",
        availableDates:["2024-01-15","2024-01-16","2024-01-17","2024-01-18","2024-01-13","2024-01-14","2024-01-19"],
        busType:"Business",
        numberOfSeats:20,
        seatLayout:{
            first:[
                [1,3,5,7,9,11,13,15,17,19],
            ],
            second:[2,4,6,8,10,12,14,16,18,20],
            third:[
                [21,23,25,27,29,31,33,35,37,39],
            ],
            fourth:[
                [22,24,26,28,30,32,34,36,38,40],
            ]
        },
        availableSeats:["9","2","31","4","16","6","20","33","40","22","25","32","36","11","7"],
    },
    {
        id:4,
        name:"İzmir Express",
        source:"İstanbul",
        destination:"İzmir",
        departureTime:"09.00 AM",
        arrivalTime:"11.30 PM",
        price:"$400",
        availableDates:["2024-01-15","2024-01-16","2024-01-17","2024-01-18","2024-01-13","2024-01-14","2024-01-19"],
        busType:"Business",
        numberOfSeats:20,
        seatLayout:{
            first:[
                [1,3,5,7,9,11,13,15,17,19],
            ],
            second:[2,4,6,8,10,12,14,16,18,20],
            third:[
                [21,23,25,27,29,31,33,35,37,39],
            ],
            fourth:[
                [22,24,26,28,30,32,34,36,38,40],
            ]
        },
        availableSeats:["9","2","31","4","16","6","20","33","40","22","25","32","36","11","7"],
    },
    {
        id:5,
        name:"İzmir Express",
        source:"Ankara",
        destination:"İzmir",
        departureTime:"09.00 AM",
        arrivalTime:"11.30 PM",
        price:"$300",
        availableDates:["2024-01-15","2024-01-16","2024-01-17","2024-01-18","2024-01-13","2024-01-14","2024-01-19"],
        busType:"Business",
        numberOfSeats:20,
        seatLayout:{
            first:[
                [1,3,5,7,9,11,13,15,17,19],
            ],
            second:[2,4,6,8,10,12,14,16,18,20],
            third:[
                [21,23,25,27,29,31,33,35,37,39],
            ],
            fourth:[
                [22,24,26,28,30,32,34,36,38,40],
            ]
        },
        availableSeats:["9","2","31","4","16","6","20","33","40","22","25","32","36","11","7"],
    },
    {
        id:6,
        name:"İzmir Express",
        source:"İzmir",
        destination:"Ankara",
        departureTime:"09.00 AM",
        arrivalTime:"11.30 PM",
        price:"$200",
        availableDates:["2024-01-15","2024-01-16","2024-01-17","2024-01-18","2024-01-13","2024-01-14","2024-01-19"],
        busType:"Business",
        numberOfSeats:20,
        seatLayout:{
            first:[
                [1,3,5,7,9,11,13,15,17,19],
            ],
            second:[2,4,6,8,10,12,14,16,18,20],
            third:[
                [21,23,25,27,29,31,33,35,37,39],
            ],
            fourth:[
                [22,24,26,28,30,32,34,36,38,40],
            ]
        },
        availableSeats:["9","2","31","4","16","6","20","33","40","22","25","32","36","11","7"],
    },
    {
        id:7,
        name:"Güneş Express",
        source:"İstanbul",
        destination:"İzmir",
        departureTime:"09.00 AM",
        arrivalTime:"11.30 PM",
        price:"$3200",
        availableDates:["2024-01-15","2024-01-16","2024-01-17","2024-01-18","2024-01-13","2024-01-14","2024-01-19"],
        busType:"Business",
        numberOfSeats:20,
        seatLayout:{
            first:[
                [1,3,5,7,9,11,13,15,17,19],
            ],
            second:[2,4,6,8,10,12,14,16,18,20],
            third:[
                [21,23,25,27,29,31,33,35,37,39],
            ],
            fourth:[
                [22,24,26,28,30,32,34,36,38,40],
            ]
        },
        availableSeats:["9","2","31","4","16","6","20","33","40","22","25","32","36","11","7"],
    },
    {
        id:8,
        name:"Ay Express",
        source:"İzmir",
        destination:"Ankara",
        departureTime:"09.00 AM",
        arrivalTime:"11.30 PM",
        price:"$300",
        availableDates:["2024-01-15","2024-01-16","2024-01-17","2024-01-18","2024-01-13","2024-01-14","2024-01-19"],
        busType:"Business",
        numberOfSeats:20,
        seatLayout:{
            first:[
                [1,3,5,7,9,11,13,15,17,19],
            ],
            second:[2,4,6,8,10,12,14,16,18,20],
            third:[
                [21,23,25,27,29,31,33,35,37,39],
            ],
            fourth:[
                [22,24,26,28,30,32,34,36,38,40],
            ]
        },
        availableSeats:["9","2","31","4","16","6","20","33","40","22","25","32","36","11","7"],
    },
];
export const locations = [
    "İstanbul",
    "Ankara",
    "İzmir",
];