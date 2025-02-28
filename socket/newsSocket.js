const socketHandler = (io) => {
    io.on("connection", (socket) => {
        console.log("User Connected:", socket.id);
        socket.on("subscribe", (category) => {
            socket.join(category);
            console.log(`User subscribed to ${category}`);
        });
    });
};
module.exports = socketHandler;