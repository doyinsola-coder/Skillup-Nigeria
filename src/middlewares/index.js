import express from "express";

export const setupMiddlewares = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};


export default setupMiddlewares;