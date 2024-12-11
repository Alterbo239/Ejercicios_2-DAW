let serie = 8, n = 1;

serie = parseInt(serie);
n = parseInt(n);

while (serie * n < 500) {
    document.write(serie * n);
    if (serie * n + serie < 500) {
        document.write(" - ");
    }
    n++;
}