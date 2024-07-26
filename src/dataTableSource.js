
export const doctorColumns = [
  //  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 120,
  },
  // {
  //   field: "userName",
  //   headerName: "UserName",
  //   width: 150,
  // },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "mobile",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "department",
    headerName: "Department",
    width: 150,
  },
  {
    field: "addedByDean",
    headerName: "Added by",
    width: 150,
  },
];


export const receptionistColumns = [
  //  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },

  {
    field: "userName",
    headerName: "UserName",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "mobile",
    headerName: "Phone",
    width: 200,
  },

];


export const patientColumns = [
  //  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "patientName",
    headerName: "Name",
    width: 150,
  },
  // {
  //   field: "email",
  //   headerName: "Email",
  //   width: 300,
  // },
  {
    field: "mobileNumber",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "department",
    headerName: "Department",
    width: 150,
  },
  {
    field: "doctorName",
    headerName: "Doctor's Name",
    width: 200,
  },
  {
    field: "appointmentTime",
    headerName: "Appointment Time",
    width: 200,
  },
];


