import React from 'react';
import { HomeOutlined, MailOutlined, SettingOutlined, BookOutlined, RobotOutlined, WhatsAppOutlined, PlusCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { Menu } from 'antd';
import { useState, useEffect } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(null, 'header', <div>Bom dia fml</div>),
  getItem('Início', '/', <HomeOutlined />),
  getItem('Tabelas', 'tables', <BookOutlined />, [
    getItem('Cadastrar Tabela', 'table/new', <PlusCircleOutlined />),
    getItem('Lista de Tabelas', 'table'),
    getItem('Cadastrar Produto', 'product/new', <PlusCircleOutlined />),
    getItem('Lista de Produtos', 'product'),
    getItem('Cadastrar Categoria', 'category/new', <PlusCircleOutlined />),
    getItem('Lista de Categorias', 'category'),
    getItem('Cadastrar Trampo', 'work/new', <PlusCircleOutlined />),
    getItem('Lista de Trampos', 'work'),
  ]),

  getItem('Bot', 'sub2', <RobotOutlined />, [
    getItem('Adicionar Whatsapp', '5', <WhatsAppOutlined />),
    getItem('Sessões/Instâncias', '6'),
    getItem('Configurações', 'sub3', <SettingOutlined />, [getItem('Cronograma', '7'), getItem('Comandos', '8')]),
  ]),

  getItem('Solicitar', 'sub4', <MailOutlined />, [
    getItem('Novo comando', '9'),
    getItem('Conserto de bug', '10'),
    getItem('Nova funcionalidade', '11'),
  ]),
];

export default function SideMenu() {
  const router = useRouter() 
  console.log(router.locales)
  const [ currentKey, setCurrentKey ] = useState('')
  useEffect(() => {
    const currentMenuItem = localStorage.getItem('currentMenuItem') ?? ''
    setCurrentKey(currentMenuItem) 
  }, [router])
  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key)
    console.log(e.keyPath)
    localStorage.setItem('currentMenuItem', e.key)
  };

  return (
    <Menu
      onClick={onClick}
      className="h-full w-2/12"
      defaultSelectedKeys={[currentKey]}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      theme="dark"
    />
  );
};
