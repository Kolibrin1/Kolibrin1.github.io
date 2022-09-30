#include <iostream>
#include <ctime>
using namespace std;

int counter = 0;

void qs(int* s_arr, int first, int last) {
    int i = first, j = last, x = s_arr[(first + last) / 2];
    counter += 5;
    do {
        while (s_arr[i] < x) { i++; counter++; }
        while (s_arr[j] > x) { j--; counter++; }
        if (i <= j) {
            if (i < j) {
                int t = s_arr[i];
                s_arr[i] = s_arr[j];
                s_arr[j] = t;
                counter += 3;
            }
            i++;
            j--;
            counter += 2;
        }
        
    } while (i <= j);
    if (i < last)
        qs(s_arr, i, last);
    if (first < j)
        qs(s_arr, first, j);
}

int main()
{
    srand(time(0));
    for (int n = 100; n <= 1000; n += 100) {
        int* a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = i; // min
            /*a[i] = n - i //max*/
            /*cout << a[i] << " ";*/
        }
        //cout << endl;
        qs(a, 0, n - 1);
        /*for (int i = 0; i < n; i++)
            cout << a[i] << " ";
        cout << endl;*/
        cout << "N = " << n << ":" << counter << endl;;
        counter = 0;
    }
    system("pause");
    return 0;

}

