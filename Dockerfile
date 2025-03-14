FROM postgres:latest

# Set environment variables
RUN  npx prisma migrate dev --name="init"
RUN  npx prisma generate
# Copy initialization scripts (optional)

EXPOSE 5432