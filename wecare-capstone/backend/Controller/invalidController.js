
exports.invalid = async (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Invalid path',
    });
};
