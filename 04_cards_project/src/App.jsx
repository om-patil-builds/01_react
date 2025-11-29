
import Card from './components/Card'


const App = () => {
  
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/facebook.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "7 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "4 weeks ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "12 days ago",
    post: "AI Research Assistant",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "8 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Pune, India"
  }
];



  return (
    <div className='parent'>
    { jobOpenings.map(function(elem , unic){ 
      
      return <div key={unic}>
        <Card company={elem.companyName}  post={elem.post}  tag1={elem.tag1} tag2={elem.tag2} pay ={elem.pay} location= {elem.location} brandLogo={elem.brandLogo} datePosted={elem.datePosted}/>
         </div>


    })}
    </div>
  )
}

export default App