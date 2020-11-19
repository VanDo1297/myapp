import {INavbarItem } from './@types/navbar.type';
import {TourItem } from './@types/tour.type';
export const navbars = [
    {
        name:'Home',
        path:'/home'
    },
    {
        name:'About',
        path:'/about'
    },
    {
        name:'Trips',
        path:'/trips'
    },
    {
        name:'Contact',
        path:'/contact'
    },
] as INavbarItem[]


export const tours =[
    {
        id: 1, 
        name:'Tour Miền Bắc 5N4D: Hà Nội - Hạ Long - Ninh Bình - Hà Giang',
        price:'4.990.000',
        image:'https://antuongxuyenviet.com/wp-content/uploads/2019/11/du-lich-ha-long-1.jpeg'
    },
    {
        id: 2, 
        name:'Tour Mộc Châu 2N1D: Mùa Hoa Mộc Châu - Săn Mây Tà Xùa',
        price:'1.490.000',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31GglSrhFyJoDVgVSJDe8BtKGWSy-uEYaCQ&usqp=CAU'
    },
    {
        id: 3, 
        name:'Tour Hà Giang 3N3D: Quản Bạ - Sông Nho Quế - Lũng Cú - Đồng Văn',
        price:'3.180.000',
        image:'https://image.thanhnien.vn/768/uploaded/kieutrinh/2019_10_08/tnomapileng_igow.jpg'
    },
    {
        id: 4 ,
        name:'Tour Cao Bằng 3N2D: Hồ Ba Bể - Pắc Ngoài - Thác Bản Giốc - Suối Lê Nin',
        price:'2.220.000',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyheeGO4BW1wkMu1G_WcKYHSLtiVnFrHcGGw&usqp=CAU'
    },
    {
        id: 5, 
        name:'Tour Miền Bắc 5N4D: HCM - Hà Giang - Cao Bằng - Thác Bản Giốc - Hồ Ba Bể',
        price:'6.950.000',
        image:'https://www.kynghidongduong.vn/images/destination/img1/2_ho-ba-be-bac-kan-viet-nam-kynghidongduong-vn-02.jpg'
    },{
        id: 6, 
        name:'Tour Miền Bắc 4N3D: Mộc Châu - Sơn La - Điện Biên - Lai Châu - Sapa',
        price:'4.680.000',
        image:'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_SAPA.jpg'
    },
    {
        id: 7, 
        name:'Tour Miền Bắc 4N3D: Sài Gòn - Hoàng Su Phì - Y Tý - Sapa',
        price:'5.888.000',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyULE59ifG0_poN12OLQUaJrz9Y-79Fj-Uig&usqp=CAU'
    }
] as TourItem[]

