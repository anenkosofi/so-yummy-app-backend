const getCurrent = async (req, res) => {
    const { name, email, avatarURL } = req.user;
    res.status(200).json({
        status: "success",
        data: {
            user: {
                name,
                email,
                avatarURL
            },
        },
    });
}; 

module.exports = getCurrent; 

