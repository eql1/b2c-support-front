import { useEffect, useState } from "react";
import { UserResponse } from "../../types/dto/UserResponse";
import getUserInfo from "../../api/userApi";

const Profile = () => {
  const [user, setUser] = useState<UserResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await getUserInfo();
        setUser(response);
        if (user) {
          document.title = `${user?.name}'s profile`;
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchResponse();
  }, []);

  return (
    <div className="p-10">
      {!loading && (
        <div>
          <p>Name: {user?.name}</p>
          <p>Role: {user?.role}</p>

          <ul>
            <span className="font-bold">Tickets:</span>
            {user?.tickets.map((ticket) => (
              <li key={ticket.id}>
                {ticket.name} - {ticket.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
