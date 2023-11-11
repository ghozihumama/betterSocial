This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

Answer A:
My Concern to PM:

1. to get latest count downvote, upvote and comment do we need to pull to refresh or real time?
2. what happend if the content/posting is deleted on database when we navigate to detail content/post?
3. The limitation row of text is implemented on description of content or comment too?
4. first, I upvote and then I downvote. is value on upvote I need to remove?

Answer C1:

1. Untuk membuat fitur saran teman di Instagram, struktur data yang mungkin cocok adalah grafik sosial atau grafik pertemanan. Dalam struktur ini, setiap pengguna direpresentasikan sebagai node, dan hubungan pertemanan antar pengguna direpresentasikan sebagai edge atau sisi. Setiap edge bisa memiliki atribut tambahan, misalnya, seberapa sering pengguna saling berinteraksi, waktu terakhir mereka berinteraksi, dan sebagainya.
2. Jika tidak ada pengguna atau komunitas yang terkait atau terkoneksi dalam grafik sosial, Anda mungkin perlu mengandalkan pendekatan lain untuk memberikan saran teman. Beberapa strategi yang bisa dipertimbangkan melibatkan analisis data pengguna secara individual, tanpa bergantung pada jaringan sosial eksternal. Beberapa ide termasuk:

a. **Analisis Minat Pengguna:** Berdasarkan aktivitas, like, atau hashtag yang digunakan oleh pengguna, Anda dapat mengidentifikasi minat bersama dan menyarankan teman dengan minat serupa.

b. **Rekomendasi Berdasarkan Lokasi:** Jika pengguna memberikan izin untuk mengakses lokasi mereka, Anda dapat menyarankan teman berdasarkan kedekatan geografis, seperti pengguna yang berada di area yang sama atau memiliki minat serupa di lokasi tertentu.

c. **Penilaian Berdasarkan Profil:** Melibatkan algoritma yang menilai profil pengguna berdasarkan informasi yang mereka bagikan. Ini dapat mencakup elemen seperti pekerjaan, pendidikan, atau preferensi lain yang dapat digunakan untuk mencocokkan pengguna yang memiliki kesamaan.

d. **Rekomendasi Berbasis Aktivitas Terkini:** Melihat pada aktivitas terkini pengguna, seperti postingan atau interaksi terbaru, untuk memberikan saran teman yang mungkin relevan.

Jika tidak ada koneksi atau komunitas yang kuat, fokus pada pengumpulan informasi dari setiap pengguna secara individual dan gunakan elemen-elemen tersebut untuk memberikan rekomendasi yang lebih spesifik dan relevan.

Jika terlalu banyak pengguna atau komunitas yang terkait atau terkoneksi, tantangannya adalah menyajikan rekomendasi teman yang paling relevan dan bermakna bagi setiap pengguna. Beberapa strategi yang dapat membantu mengatasi masalah ini melibatkan pengelolaan data dan penyesuaian algoritma:

a. **Filter dan Prioritasi:** Terapkan filter atau prioritas pada hubungan pertemanan untuk menunjukkan rekomendasi teman yang lebih penting atau relevan. Misalnya, Anda bisa memberikan bobot berdasarkan seberapa sering pengguna berinteraksi, seberapa lama mereka sudah berteman, atau faktor lain yang dianggap penting.

b. **Pengelompokan atau Segmentasi:** Jika memungkinkan, kelompokkan pengguna ke dalam segmen berdasarkan minat atau karakteristik tertentu. Kemudian, berikan rekomendasi teman dari segmen yang paling sesuai.

c. **Penggunaan Machine Learning:** Manfaatkan algoritma machine learning untuk terus memperbarui model rekomendasi berdasarkan pola dan preferensi yang berkembang dari waktu ke waktu. Ini memungkinkan sistem untuk mengenali tren baru dan merespons perubahan dalam aktivitas pengguna.

d. **Feedback Loop:** Bangun mekanisme umpan balik dari pengguna. Biarkan mereka memberi tahu sistem apakah rekomendasi itu sesuai atau tidak. Informasi umpan balik ini dapat digunakan untuk menyempurnakan algoritma dan membuat rekomendasi yang lebih baik.

e. **Personalisasi Dinamis:** Sesuaikan rekomendasi teman secara dinamis berdasarkan aktivitas terkini pengguna. Pengguna yang aktif dapat melihat rekomendasi berbeda dari mereka yang kurang aktif.

f. **Batas Jumlah Rekomendasi:** Batasi jumlah rekomendasi yang ditampilkan agar tidak membanjiri pengguna dengan terlalu banyak opsi. Ini dapat membantu memastikan bahwa rekomendasi yang ditampilkan benar-benar relevan.

Dengan menggabungkan beberapa strategi ini, Anda dapat menciptakan pengalaman rekomendasi teman yang lebih baik dan sesuai dengan kebutuhan dan preferensi unik dari setiap pengguna.

3. Untuk menguji fitur rekomendasi teman, Anda dapat mengadopsi berbagai metode pengujian. Berikut beberapa langkah yang dapat diambil:

a. **A/B Testing:**

- Bagi pengguna menjadi dua kelompok, satu kelompok melihat dan menggunakan fitur rekomendasi teman, sedangkan kelompok lainnya tidak.
- Bandingkan metrik kunci, seperti tingkat interaksi pengguna, jumlah pertemanan baru, atau tingkat retensi, antara kedua kelompok.

b. **Survei Pengguna:**

- Lakukan survei untuk mengumpulkan umpan balik langsung dari pengguna tentang pengalaman mereka dengan fitur tersebut.
- Tanyakan apakah mereka menemukan rekomendasi teman bermanfaat, sejauh mana rekomendasi sesuai dengan preferensi mereka, dan apakah mereka akan menggunakan fitur tersebut secara terus-menerus.

c. **Analisis Retensi:**

- Periksa tingkat retensi pengguna setelah menggunakan fitur. Apakah ada peningkatan dalam waktu penggunaan atau frekuensi kembali setelah menggunakan fitur tersebut?

d. **Pemantauan Aktivitas Pengguna:**

- Amati aktivitas pengguna, seperti jumlah pertemanan baru yang dibuat atau tingkat interaksi yang meningkat setelah pengguna melihat rekomendasi teman.
- Identifikasi apakah ada tren atau pola tertentu dalam cara pengguna berinteraksi setelah menggunakan fitur tersebut.

e. **Analisis Umpan Balik:**

- Pantau umpan balik dari pengguna melalui ulasan aplikasi, forum dukungan pelanggan, atau media sosial. Apakah ada pola umum dalam masukan positif atau negatif?

f. **Uji Pengguna Beta:**

- Rilis fitur dalam lingkungan pengguna beta terbatas untuk mengumpulkan umpan balik lebih lanjut sebelum peluncuran resmi.

g. **Uji Kecepatan dan Kinerja:**

- Pastikan bahwa fitur tersebut memberikan respons cepat dan tidak menghambat kinerja keseluruhan aplikasi. Uji kecepatan dan kinerja fitur di berbagai perangkat dan kondisi jaringan.

h. **Pemantauan Error:**

- Lacak dan analisis setiap bug atau kesalahan yang dilaporkan oleh pengguna. Pastikan untuk mengatasi masalah ini dengan cepat dan memberikan pembaruan jika diperlukan.

Dengan kombinasi metode pengujian ini, Anda dapat mendapatkan pemahaman yang lebih baik tentang efektivitas fitur rekomendasi teman dan membuat perbaikan atau peningkatan berdasarkan hasil pengujian.

Answer C2:
untuk menemukan saran terbaik bagi pengguna

1. Create user / profile terlebih dahulu, minta pengguna untuk create interest
2. System akan mengolah data bersadarkan beberapa parameter yang telah diinput oleh user misalkan (lokasi, minat, aktivitas terkini)
3. Jika lokasi dan minat user belum pernah ada pada database. maka akan disimpan pada database
4. Jika minat terlalu banyak maka bisa dibuatkan skala prioritas
5. System bisa sarankan membuat initial saran ketpada user baru
