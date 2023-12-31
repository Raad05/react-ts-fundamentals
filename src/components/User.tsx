type UserProps = {
  users: {
    name: string;
    age: number;
    languages: string[];
  }[];
};

const User = ({ users }: UserProps) => {
  return (
    <div className="user">
      {users.map((user, idx) => {
        const { name, age, languages } = user;
        return (
          <div key={idx}>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>
              Languages:{" "}
              {languages.map((language, idx) => (
                <span key={idx}>{language}, </span>
              ))}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
