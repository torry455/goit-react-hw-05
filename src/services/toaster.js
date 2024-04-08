import toast from "react-hot-toast";

const notify = () =>
  toast("Please, input query!", {
    duration: 3000,
    icon: "🔍", 
    style: {
      background: "#dbb51fbe",
      color: "#fff",
      marginTop: "250px",
      width: "300px",
      padding: "10px",
    },
  });

const noquery = () =>
  toast("Sorry, there are no movies matching your search query. Please try again!", {
    duration: 3000,
    icon: "❌",
    style: {
      background: "#dbb51fbe",
      color: "#fff",
      marginTop: "250px",
    },
  });

export { notify, noquery };