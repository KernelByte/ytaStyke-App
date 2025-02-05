PGDMP                         {            db_ytaStyle    15.2    15.2 D    =           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            >           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            @           1262    16398    db_ytaStyle    DATABASE     �   CREATE DATABASE "db_ytaStyle" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "db_ytaStyle";
                postgres    false            A           0    0    DATABASE "db_ytaStyle"    COMMENT     S   COMMENT ON DATABASE "db_ytaStyle" IS 'Base de datos principal para yta Style APP';
                   postgres    false    3392            �            1259    16487    buys    TABLE     �   CREATE TABLE public.buys (
    id_buy integer NOT NULL,
    id_group_buy integer,
    price_buy integer,
    buy_date date,
    name_user character varying,
    id_payment_status integer,
    id_user_buy integer
);
    DROP TABLE public.buys;
       public         heap    postgres    false            B           0    0 
   TABLE buys    ACL     D   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.buys TO user_yta;
          public          postgres    false    219            �            1259    16486    buys_id_buy_seq    SEQUENCE     �   CREATE SEQUENCE public.buys_id_buy_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.buys_id_buy_seq;
       public          postgres    false    219            C           0    0    buys_id_buy_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.buys_id_buy_seq OWNED BY public.buys.id_buy;
          public          postgres    false    218            �            1259    16496    groups    TABLE     a   CREATE TABLE public.groups (
    id_group integer NOT NULL,
    description character varying
);
    DROP TABLE public.groups;
       public         heap    postgres    false            D           0    0    TABLE groups    ACL     F   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.groups TO user_yta;
          public          postgres    false    221            �            1259    16495    groups_id_group_seq    SEQUENCE     �   CREATE SEQUENCE public.groups_id_group_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.groups_id_group_seq;
       public          postgres    false    221            E           0    0    groups_id_group_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.groups_id_group_seq OWNED BY public.groups.id_group;
          public          postgres    false    220            �            1259    16514    price_products    TABLE     �   CREATE TABLE public.price_products (
    id_price_product integer NOT NULL,
    id_group_price_product integer,
    name_product character varying,
    price_unit integer,
    price_minimum integer,
    price_sending integer
);
 "   DROP TABLE public.price_products;
       public         heap    postgres    false            F           0    0    TABLE price_products    ACL     N   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.price_products TO user_yta;
          public          postgres    false    225            �            1259    16513 #   price_products_id_price_product_seq    SEQUENCE     �   CREATE SEQUENCE public.price_products_id_price_product_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public.price_products_id_price_product_seq;
       public          postgres    false    225            G           0    0 #   price_products_id_price_product_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public.price_products_id_price_product_seq OWNED BY public.price_products.id_price_product;
          public          postgres    false    224            �            1259    16505    products    TABLE       CREATE TABLE public.products (
    id_product integer NOT NULL,
    date_product date,
    name_product character varying,
    quantity integer,
    price_unit integer,
    price_total integer,
    id_group_product integer,
    id_status_product integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            H           0    0    TABLE products    ACL     H   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.products TO user_yta;
          public          postgres    false    223            �            1259    16504    products_id_product_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_product_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.products_id_product_seq;
       public          postgres    false    223            I           0    0    products_id_product_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.products_id_product_seq OWNED BY public.products.id_product;
          public          postgres    false    222            �            1259    16469    roles    TABLE     _   CREATE TABLE public.roles (
    id_role integer NOT NULL,
    description character varying
);
    DROP TABLE public.roles;
       public         heap    postgres    false            J           0    0    TABLE roles    ACL     E   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.roles TO user_yta;
          public          postgres    false    215            �            1259    16468    roles_id_role_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_role_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.roles_id_role_seq;
       public          postgres    false    215            K           0    0    roles_id_role_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.roles_id_role_seq OWNED BY public.roles.id_role;
          public          postgres    false    214            �            1259    16523    status    TABLE     �   CREATE TABLE public.status (
    id_status integer NOT NULL,
    group_status character varying,
    description character varying
);
    DROP TABLE public.status;
       public         heap    postgres    false            L           0    0    TABLE status    ACL     F   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.status TO user_yta;
          public          postgres    false    227            �            1259    16522    status_id_status_seq    SEQUENCE     �   CREATE SEQUENCE public.status_id_status_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.status_id_status_seq;
       public          postgres    false    227            M           0    0    status_id_status_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.status_id_status_seq OWNED BY public.status.id_status;
          public          postgres    false    226            �            1259    16478    users    TABLE     �   CREATE TABLE public.users (
    id_user integer NOT NULL,
    number_id integer,
    name_user character varying,
    email character varying,
    password_user character varying,
    id_role_user integer
);
    DROP TABLE public.users;
       public         heap    postgres    false            N           0    0    TABLE users    ACL     E   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.users TO user_yta;
          public          postgres    false    217            �            1259    16477    users_id_user_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_id_user_seq;
       public          postgres    false    217            O           0    0    users_id_user_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_id_user_seq OWNED BY public.users.id_user;
          public          postgres    false    216            �           2604    16490    buys id_buy    DEFAULT     j   ALTER TABLE ONLY public.buys ALTER COLUMN id_buy SET DEFAULT nextval('public.buys_id_buy_seq'::regclass);
 :   ALTER TABLE public.buys ALTER COLUMN id_buy DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    16499    groups id_group    DEFAULT     r   ALTER TABLE ONLY public.groups ALTER COLUMN id_group SET DEFAULT nextval('public.groups_id_group_seq'::regclass);
 >   ALTER TABLE public.groups ALTER COLUMN id_group DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    16517    price_products id_price_product    DEFAULT     �   ALTER TABLE ONLY public.price_products ALTER COLUMN id_price_product SET DEFAULT nextval('public.price_products_id_price_product_seq'::regclass);
 N   ALTER TABLE public.price_products ALTER COLUMN id_price_product DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    16508    products id_product    DEFAULT     z   ALTER TABLE ONLY public.products ALTER COLUMN id_product SET DEFAULT nextval('public.products_id_product_seq'::regclass);
 B   ALTER TABLE public.products ALTER COLUMN id_product DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    16472    roles id_role    DEFAULT     n   ALTER TABLE ONLY public.roles ALTER COLUMN id_role SET DEFAULT nextval('public.roles_id_role_seq'::regclass);
 <   ALTER TABLE public.roles ALTER COLUMN id_role DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    16526    status id_status    DEFAULT     t   ALTER TABLE ONLY public.status ALTER COLUMN id_status SET DEFAULT nextval('public.status_id_status_seq'::regclass);
 ?   ALTER TABLE public.status ALTER COLUMN id_status DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    16481    users id_user    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN id_user SET DEFAULT nextval('public.users_id_user_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN id_user DROP DEFAULT;
       public          postgres    false    217    216    217            2          0    16487    buys 
   TABLE DATA           t   COPY public.buys (id_buy, id_group_buy, price_buy, buy_date, name_user, id_payment_status, id_user_buy) FROM stdin;
    public          postgres    false    219   �K       4          0    16496    groups 
   TABLE DATA           7   COPY public.groups (id_group, description) FROM stdin;
    public          postgres    false    221   �K       8          0    16514    price_products 
   TABLE DATA           �   COPY public.price_products (id_price_product, id_group_price_product, name_product, price_unit, price_minimum, price_sending) FROM stdin;
    public          postgres    false    225   L       6          0    16505    products 
   TABLE DATA           �   COPY public.products (id_product, date_product, name_product, quantity, price_unit, price_total, id_group_product, id_status_product) FROM stdin;
    public          postgres    false    223   %L       .          0    16469    roles 
   TABLE DATA           5   COPY public.roles (id_role, description) FROM stdin;
    public          postgres    false    215   hL       :          0    16523    status 
   TABLE DATA           F   COPY public.status (id_status, group_status, description) FROM stdin;
    public          postgres    false    227   �L       0          0    16478    users 
   TABLE DATA           b   COPY public.users (id_user, number_id, name_user, email, password_user, id_role_user) FROM stdin;
    public          postgres    false    217   �L       P           0    0    buys_id_buy_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.buys_id_buy_seq', 1, false);
          public          postgres    false    218            Q           0    0    groups_id_group_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.groups_id_group_seq', 1, false);
          public          postgres    false    220            R           0    0 #   price_products_id_price_product_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public.price_products_id_price_product_seq', 1, false);
          public          postgres    false    224            S           0    0    products_id_product_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.products_id_product_seq', 1, true);
          public          postgres    false    222            T           0    0    roles_id_role_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.roles_id_role_seq', 1, false);
          public          postgres    false    214            U           0    0    status_id_status_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.status_id_status_seq', 1, false);
          public          postgres    false    226            V           0    0    users_id_user_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_id_user_seq', 1, false);
          public          postgres    false    216            �           2606    16494    buys buys_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.buys
    ADD CONSTRAINT buys_pkey PRIMARY KEY (id_buy);
 8   ALTER TABLE ONLY public.buys DROP CONSTRAINT buys_pkey;
       public            postgres    false    219            �           2606    16503    groups groups_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id_group);
 <   ALTER TABLE ONLY public.groups DROP CONSTRAINT groups_pkey;
       public            postgres    false    221            �           2606    16521 "   price_products price_products_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.price_products
    ADD CONSTRAINT price_products_pkey PRIMARY KEY (id_price_product);
 L   ALTER TABLE ONLY public.price_products DROP CONSTRAINT price_products_pkey;
       public            postgres    false    225            �           2606    16512    products products_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id_product);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    223            �           2606    16476    roles roles_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id_role);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    215            �           2606    16530    status status_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id_status);
 <   ALTER TABLE ONLY public.status DROP CONSTRAINT status_pkey;
       public            postgres    false    227            �           2606    16485    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    217            �           2606    16541    buys buys_groups_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.buys
    ADD CONSTRAINT buys_groups_fkey FOREIGN KEY (id_group_buy) REFERENCES public.groups(id_group) NOT VALID;
 ?   ALTER TABLE ONLY public.buys DROP CONSTRAINT buys_groups_fkey;
       public          postgres    false    221    219    3217            �           2606    16546    buys buys_status_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.buys
    ADD CONSTRAINT buys_status_fkey FOREIGN KEY (id_payment_status) REFERENCES public.status(id_status) NOT VALID;
 ?   ALTER TABLE ONLY public.buys DROP CONSTRAINT buys_status_fkey;
       public          postgres    false    219    3223    227            �           2606    16536    buys buys_users_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.buys
    ADD CONSTRAINT buys_users_fkey FOREIGN KEY (id_user_buy) REFERENCES public.users(id_user) NOT VALID;
 >   ALTER TABLE ONLY public.buys DROP CONSTRAINT buys_users_fkey;
       public          postgres    false    219    217    3213            �           2606    16561 )   price_products price_products_groups_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.price_products
    ADD CONSTRAINT price_products_groups_fkey FOREIGN KEY (id_group_price_product) REFERENCES public.groups(id_group) NOT VALID;
 S   ALTER TABLE ONLY public.price_products DROP CONSTRAINT price_products_groups_fkey;
       public          postgres    false    225    3217    221            �           2606    16551    products products_groups_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_groups_fkey FOREIGN KEY (id_group_product) REFERENCES public.groups(id_group) NOT VALID;
 G   ALTER TABLE ONLY public.products DROP CONSTRAINT products_groups_fkey;
       public          postgres    false    3217    223    221            �           2606    16556    products products_status_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_status_fkey FOREIGN KEY (id_status_product) REFERENCES public.status(id_status) NOT VALID;
 G   ALTER TABLE ONLY public.products DROP CONSTRAINT products_status_fkey;
       public          postgres    false    227    223    3223            �           2606    16531    users user_role_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_role_fkey FOREIGN KEY (id_role_user) REFERENCES public.roles(id_role) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 >   ALTER TABLE ONLY public.users DROP CONSTRAINT user_role_fkey;
       public          postgres    false    215    3211    217            2      x������ � �      4      x������ � �      8      x������ � �      6   3   x�3�4202�50�54�t�/JJ,IT��J�4�42200�����\1z\\\ �	�      .      x������ � �      :      x������ � �      0      x������ � �     