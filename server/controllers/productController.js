// gets all products from database
export const getAllProducts = (req, res, next) => {
	res.status(200).json({
		success: true,
		message: 'Shows all products in product database',
	});
};
