const getCurrent = async (req, res) => {
    const { name, email, id } = req.user;
    res.status(200).json({
        status: "success",
        data: {
            user: {
                id,
                name,
                email,
            },
        },
    });
}; 

module.exports = getCurrent; 

