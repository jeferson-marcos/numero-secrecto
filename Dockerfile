# Use a imagem oficial do PHP com Apache
FROM php:8.2-apache

# Definir o diretório de trabalho
WORKDIR /var/www/html

# Copiar todos os arquivos do projeto para o container
COPY . .

# Configurar permissões corretas
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Habilitar mod_rewrite do Apache (caso necessário)
RUN a2enmod rewrite

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Apache
CMD ["apache2-foreground"]