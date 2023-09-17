const express = require('express');

const API = "/api";
const user = require('./userRoute');
const subject = require('./subjectRoute');

/**
 * @swagger
 * /subjects:
 *   get:
 *     summary: Obtener una lista de subjects
 *     responses:
 *       200:
 *         responseData: [{ id: 1, name: "Name", description: "Description", credits:1, proffesor: "Proffesor" }]
 *         message: One/All Subjects retrieved successfully
 *       500:
 *         responseData: []
 *         message: Error retrieving one/all subjects
 */

/**
 * @swagger
 * /subjects/{id}:
 *   get:
 *     summary: Obtener un subject
 *     requestParams:
 *       required: true
 *       id:
 *         type: int
 *         description: text
 *     responses:
 *       200:
 *         responseData: [{ id: 1, name: "Name", description: "Description", credits:1, proffesor: "Proffesor" }]
 *         message: One/All Subjects retrieved successfully
 *       500:
 *         responseData: []
 *         message: Error retrieving one/all subjects
*/

/**
 * @swagger
 * /subjects:
 *   post:
 *     summary: Agregar Subject
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: int
 *                 description: number
 *               name:
 *                 type: string
 *                 description: text
 *               description:
 *                 type: string
 *                 description: text
 *               credits:
 *                 type: int
 *                 description: number
 *               proffesor:
 *                 type: string
 *                 description: text
 *             required:
 *               - property1
 *               - property2
 *     responses:
 *       200:
 *         description: Agregar Subject
 */

/**
 * @swagger
 * /subjects/{id}:
 *   put:
 *     summary: Actualizar un subject
 *       requestBody:
 *         required: true
 *     responses:
 *       200:
 *         description: Subject updated
 *       500:
 *         description: Error updating subject
 */

/**
 * @swagger
 * /subjects/{id}:
 *   delete:
 *     summary: Eliminar subject
 *     responses:
 *       200:
 *         message: Subject deleted
 *       500:
 *         message: Error deleting subject
 */

const routes = (server) => {
  server.use(API, user);
  server.use(API, subject);
};

module.exports = routes;