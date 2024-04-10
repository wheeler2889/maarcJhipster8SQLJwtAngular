FROM openjdk:17.0
COPY . /app/
WORKDIR /app/
RUN chmod +x mvnw
RUN ./mvnw install -DskipTests -Pdev,api-docs
RUN cp target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar","app.jar"]
