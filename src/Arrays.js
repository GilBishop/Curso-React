const users = [
  {
    id: 1,
    name: "User",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "User2",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "User3",
    image: "https://robohash.org/user3",
  },
];

export const Array = () => {
  return users.map((user, i) => {
    return (
      <div key={i}>
        <h1>{user.name}</h1>
        <img src={user.image} />
      </div>
    );
  });
};
