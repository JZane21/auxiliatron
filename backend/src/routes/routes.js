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
 *         description: lista de subjects obtenida exitosamente
 */

/**
 * @swagger
 * /subjects/{id}:
 *   get:
 *     summary: Obtener un subject
 *     responses:
 *       200:
 *         description: Subject obtenida exitosamente
 */

/**
 * @swagger
 * /subjects:
 *   post:
 *     summary: Agregar Subject
 *     responses:
 *       200:
 *         description: Subject posteado exitosamente
 */

/**
 * @swagger
 * /subjects/{id}:
 *   put:
 *     summary: Actualizar un subject
 *     responses:
 *       200:
 *         description: Subject actualizado exitosamente
 */

/**
 * @swagger
 * /subjects/{id}:
 *   delete:
 *     summary: Eliminar subject
 *     responses:
 *       200:
 *         description: Subject eliminado exitosamente
 */

const routes = (server) => {
  server.use(API, user);
  server.use(API, subject);
};

module.exports = routes;