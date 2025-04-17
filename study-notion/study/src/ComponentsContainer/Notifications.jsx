const Notifications = () => {
    const alerts = [
      { type: "info", message: "New course 'DSA Masterclass' launched!" },
      { type: "warning", message: "Your profile is 80% complete." },
    ];
  
    return (
      <div className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 ">
        <h2 className="text-xl font-semibold mb-4">🔔 Notifications</h2>
        <ul className="space-y-3">
          {alerts.map((alert, i) => (
            <li key={i} className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6  border-l-4 ">
              <p className="text-sm">{alert.message}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Notifications;
  