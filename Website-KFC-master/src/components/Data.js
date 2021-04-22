import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const Data = [
  {
    title: 'THỰC ĐƠN',
    path: '/',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'COMBO 1 NGƯỜI',
        path: '/',
      },
      {
        title: 'COMBO NHÓM',
        path: '/',
      },
      {
        title: 'MÓN LẺ',
        path: '/',
      }
    ]
  },
  {
    title: 'NHÀ HÀNG',
    path: '/',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'TIN KHUYẾN MÃI',
    path: '/',
  },
  {
    title: 'ĐẶT TIỆC SINH NHẬT',
    path: '/',
  },
  {
    title: 'THÀNH VIÊN',
    path: '/',

  },
  {
    title: 'GIỚI THIỆU',
    path: '/',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'KFC VIỆT NAM',
          path: '/',
        },
        {
          title: 'TIN TỨC',
          path: '/',
        },
        {
          title: 'LỊCH SỬ HÌNH THÀNH',
          path: '/',
        },
        {
            title: 'TẬP ĐOÀN YUM!',
            path: '/',
        }
      ]
  },
  {
    title: 'NGHỀ NGHIỆP',
    path: '/',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'TUYỂN DỤNG',
          path: '/',
        },
        {
          title: 'TRÁCH NHIỆM CỘNG ĐỒNG',
          path: '/',
        },
        {
          title: 'VĂN HÓA KFC',
          path: '/',
        },
      ]
  },
  {
    title: 'KẾT NỐI VỚI KFC',
    path: '/',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          icon: <AiIcons.AiFillFacebook />,
          path: '/',
        },
        {
          icon: <AiIcons.AiFillYoutube />,
          path: '/',
        },
        {
          icon: <AiIcons.AiFillInstagram />,
          path: '/',
        },
      ]
  }
];