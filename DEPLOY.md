# GitHub Pages Deploy Talimatları

Bu proje GitHub Pages ile deploy edilmek üzere hazırlanmıştır.

## Gereksinimler

- GitHub hesabı
- Domain: https://kkuydt.com/ (zaten satın alınmış)
- Proje GitHub repository'sinde olmalı

## Deploy Adımları

### 1. GitHub Repository Ayarları

1. GitHub'da repository'nizi açın
2. **Settings** sekmesine gidin
3. Sol menüden **Pages** seçin
4. **Source** olarak **GitHub Actions** seçin
5. **Save** butonuna tıklayın

### 2. Domain Ayarları

1. **Pages** ayarlarında **Custom domain** kısmına `kkuydt.com` yazın
2. **Enforce HTTPS** seçeneğini işaretleyin
3. **Save** butonuna tıklayın
4. Domain aktif olduğunda **https://kkuydt.com/** adresinden erişim sağlanacak

### 3. DNS Ayarları (Domain sağlayıcınızda)

Domain sağlayıcınızda aşağıdaki DNS kayıtlarını ekleyin:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: kkuydt.github.io
```

### 4. Deploy

1. Kodu GitHub repository'nize push edin:
   ```bash
   git add .
   git commit -m "GitHub Pages için hazırlandı"
   git push origin main
   ```

2. GitHub Actions otomatik olarak çalışacak ve sitenizi deploy edecek
3. Birkaç dakika sonra **https://kkuydt.com/** adresinden sitenize erişebilirsiniz

## Kontrol

- Deploy durumunu **Actions** sekmesinden takip edebilirsiniz
- Hata durumunda logları kontrol edin
- Domain ayarlarının aktif olması 24-48 saat sürebilir

## Notlar

- Her push işleminde otomatik deploy yapılır
- CNAME dosyası zaten projede mevcut (kkuydt.com)
- GitHub Actions workflow dosyası `.github/workflows/deploy.yml` konumunda
- Site **https://kkuydt.com/** adresinde yayınlanacak
