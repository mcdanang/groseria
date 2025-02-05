"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Admins",
			[
				{
					email: "super@groseria.com",
					password: "$2b$10$nQq1bT.xMipXA.K7zCIPzOXDBMUDiFzGhEg2TrRxdPeK7dQuc7tEu",
					super: true,
				},
				{
					email: "groseriastore.jakpus@groseria.com",
					password: "$2b$10$O7V5WHx9FiVX.iQVZ9YS4.huCVG2pwwyvCwbD6DJpweeHViqk3zcW",
					super: false,
				},
				{
					email: "groseriastore.smg@groseria.com",
					password: "$2b$10$MoV77bYEnIBtc8IpTPYhl.HQq7dotjU6S8Vm0hpmZhRaFVntK/uce",
					super: false,
				},
				{
					email: "groseriastore.solo@groseria.com",
					password: "$2b$10$cvphjdpZ4AyR7.cLltLuxe0f/n2TSMxATCzbMa7GBJC.RRnW65M.K",
					super: false,
				},
				{
					email: "groseriastore.bdg@groseria.com",
					password: "$2b$10$r5/9jibF1tZ4Y6W2acGpq.zYABTNM1byqdFAQW8iXCL.PjjnvK8pO",
					super: false,
				},
				{
					email: "groseriastore.sby@groseria.com",
					password: "$2b$10$ozV5HsinriaPDiP0LK9UFONZJfyx3oWIKa5r7Qe6MDxIp95jX5AjO",
					super: false,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Admins", null, {});
	},
};
