CREATE FUNCTION public.truncate_tables(username character varying) RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
    statements CURSOR FOR
        SELECT tablename FROM pg_tables
        WHERE tableowner = username AND schemaname = 'public';
BEGIN
    FOR stmt IN statements LOOP
        EXECUTE 'TRUNCATE TABLE ' || quote_ident(stmt.tablename) || ' CASCADE;';
    END LOOP;
END;
$$;
SET default_table_access_method = heap;
CREATE TABLE public.posts (
    id integer NOT NULL,
    author_id integer NOT NULL,
    content text,
    creation_date timestamp without time zone DEFAULT now() NOT NULL,
    modification_date time without time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.users (
    id integer NOT NULL,
    username text NOT NULL,
    email text,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    picture text
);
CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.messages_id_seq OWNED BY public.posts.id;
ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey1 PRIMARY KEY (id);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT messages_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
