

# MeliChallenge

### El challenge fue desarrollado cont React / express / Typescript y Nx para manejar el workspace.

Antes de correr los proyectos, generar un archivo .env basado en el archivo .env.example e incluir las respectivas urls.

Para correr los proyectos:
- front: nx serve meli
- api: nx serve meli-middleware
- e2e: nx e2e meli-e2e --watch 

Para correr los test:
- nx run products-products-api:test  
- nx run products-products-ui:test  

![alt text](/graph.png)