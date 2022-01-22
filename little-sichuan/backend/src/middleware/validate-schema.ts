function ValidateSch(schema) {
    return async (req, res, next) => {
        try {
            const validateBody = await schema.validate(req.body);
            req.body = validateBody;
            next();
        } catch (error) {
            res.status(400).json(error);
        }
    };
}
exports = ValidateSch;
