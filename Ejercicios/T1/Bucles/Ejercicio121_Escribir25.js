let serie = 11, n = 1;

serie = parseInt(serie);
n = parseInt(n);

while (n <= 25) {
    document.write(serie * n);
    n++;
    if (n <= 25) {
        document.write(" - ");
    }
}