# Robot Battery Management System

Bu proje, robot batarya seviyelerinin izlenmesi ve yönetilmesi için geliştirilmiş bir sistemdir. **Admin** ve **Maintainer** rolleri, tüm batarya verilerine erişebilirken, **User** rolü sadece kendi robotlarına ait verilere erişebilir.

## Gereksinimler

Projenin çalışabilmesi için aşağıdaki yazılımlar ve araçlar gereklidir:

### Yazılım Gereksinimleri:

- **Node.js**: Proje, Node.js ile geliştirilmiştir. En az versiyon **14.x.x** gereklidir.
- **PostgreSQL**: Veritabanı olarak **PostgreSQL** kullanılmaktadır. En az versiyon **12.x.x** gereklidir.

### Kütüphaneler:

Projenin çalışması için aşağıdaki kütüphanelere ihtiyaç duyulmaktadır:

- **bcryptjs**: Şifrelerin güvenli bir şekilde saklanması için.
- **cors**: Farklı domainlerden gelen isteklerin kontrol edilmesi için.
- **dotenv**: Ortam değişkenlerinin yönetimi için.
- **express**: Web sunucusu oluşturmak için.
- **jsonwebtoken**: Kullanıcı doğrulaması ve JWT (JSON Web Token) ile güvenlik sağlamak için.
- **pg**: PostgreSQL veritabanı ile bağlantı kurmak için.
- **pg-hstore**: PostgreSQL için JSON verilerini kolayca işlemek için.
- **sequelize**: ORM (Object Relational Mapping) olarak veritabanı işlemi yapmak için.

## Kurulum

Projenizi lokal ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Projeyi klonlayın:
   git clone https://github.com/MertCanInam/ProjectRobo.git
2. Proje dizinine gidin:
   cd ProjectRobo
3. Bağımlılıkları yükleyin
4. Veritabanı yapılandırmalarını yapın
5. Projeyi başlatın
   

