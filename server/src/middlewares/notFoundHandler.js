
export default (req, res, next) => {
    res.status(404).send({ message: `Cannot GET ${req.url}` });
};
