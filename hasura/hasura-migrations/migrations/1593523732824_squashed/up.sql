
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
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
CREATE TABLE public.posts (
    id integer NOT NULL,
    author_id integer NOT NULL,
    content text,
    creation_date timestamp without time zone DEFAULT now() NOT NULL,
    modification_date time without time zone DEFAULT now() NOT NULL,
    title text DEFAULT 'no title'::text NOT NULL,
    category_id integer DEFAULT 2 NOT NULL
);
CREATE TABLE public.categories (
    id integer NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.messages_id_seq OWNED BY public.posts.id;
CREATE TABLE public.replies (
    id integer NOT NULL,
    author_id integer,
    content text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    post_id integer
);
COMMENT ON TABLE public.replies IS 'The replies to any post';
CREATE SEQUENCE public.replies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.replies_id_seq OWNED BY public.replies.id;
ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);
ALTER TABLE ONLY public.replies ALTER COLUMN id SET DEFAULT nextval('public.replies_id_seq'::regclass);
ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);
ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.replies
    ADD CONSTRAINT replies_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_replies_updated_at BEFORE UPDATE ON public.replies FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_replies_updated_at ON public.replies IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.replies
    ADD CONSTRAINT replies_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;

alter table "public"."categories" rename to "topics";

ALTER TABLE "public"."posts" ALTER COLUMN "category_id" TYPE int4;
ALTER TABLE "public"."posts" ALTER COLUMN "category_id" DROP NOT NULL;
COMMENT ON COLUMN "public"."posts"."category_id" IS E'Define the main suject of the post'
alter table "public"."posts" rename column "category_id" to "topic_id";

CREATE TABLE "public"."post_types"("id" serial NOT NULL, "name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("name"));

ALTER TABLE "public"."posts" ADD COLUMN "type_id" integer NOT NULL DEFAULT 1;


           alter table "public"."posts"
           add constraint "posts_type_id_fkey" 
           foreign key ("type_id") 
           references "public"."post_types"
           ("id") on update restrict on delete restrict;
      

ALTER TABLE "public"."posts" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();

ALTER TABLE "public"."posts" ADD COLUMN "updated_at" timestamptz NULL DEFAULT now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_posts_updated_at"
BEFORE UPDATE ON "public"."posts"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_posts_updated_at" ON "public"."posts" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';


ALTER TABLE posts
DROP COLUMN creation_date;
ALTER TABLE posts
DROP COLUMN modification_date;

alter table "public"."topics" rename to "post_topics";

CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  parent_message UUID REFERENCES comments(id)
);

COMMENT ON COLUMN "public"."comments"."parent_message" IS E''

ALTER TABLE "public"."comments" ADD COLUMN "post_id" integer NOT NULL;

ALTER TABLE "public"."comments" ADD COLUMN "author_id" integer NOT NULL;

ALTER TABLE "public"."comments" ADD COLUMN "created_at" timestamptz NOT NULL DEFAULT now();

ALTER TABLE "public"."comments" ADD COLUMN "updated_at" timestamptz NOT NULL DEFAULT now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_comments_updated_at"
BEFORE UPDATE ON "public"."comments"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_comments_updated_at" ON "public"."comments" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';


COMMENT ON COLUMN "public"."comments"."parent_message" IS E''
alter table "public"."comments" rename column "parent_message" to "parent_comment";


           alter table "public"."comments"
           add constraint "comments_post_id_fkey" 
           foreign key ("post_id") 
           references "public"."posts"
           ("id") on update restrict on delete restrict;
      

drop table replies;

COMMENT ON COLUMN "public"."comments"."parent_comment" IS E''
alter table "public"."comments" rename column "parent_comment" to "parent_comment_id";

alter table "public"."comments" rename to "replies";

COMMENT ON COLUMN "public"."replies"."parent_comment_id" IS E''
alter table "public"."replies" rename column "parent_comment_id" to "parent_reply_id";

alter table "public"."replies" rename to "comments";

COMMENT ON COLUMN "public"."comments"."parent_reply_id" IS E''
alter table "public"."comments" rename column "parent_reply_id" to "parent_comment_id";

CREATE TABLE "public"."proposals"("id" serial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "post_id" integer NOT NULL, "chain_db_id" uuid NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("post_id"), UNIQUE ("chain_db_id")); COMMENT ON TABLE "public"."proposals" IS E'on chain proposal created automatically by chain-db-watcher';


           alter table "public"."proposals"
           add constraint "proposals_post_id_fkey" 
           foreign key ("post_id") 
           references "public"."posts"
           ("id") on update restrict on delete restrict;
      

alter table "public"."proposals" rename to "onchain_proposals";

ALTER TABLE "public"."onchain_proposals" DROP COLUMN "chain_db_id" CASCADE

ALTER TABLE "public"."onchain_proposals" ADD COLUMN "chain_db_id" integer NOT NULL UNIQUE;

ALTER TABLE "public"."onchain_proposals" ADD COLUMN "proposer_address" text NOT NULL;

ALTER TABLE "public"."onchain_proposals" ALTER COLUMN "chain_db_id" TYPE int4;
COMMENT ON COLUMN "public"."onchain_proposals"."chain_db_id" IS E''
alter table "public"."onchain_proposals" rename column "chain_db_id" to "onchain_proposal_id";

alter table "public"."onchain_proposals" rename to "onchain_links";

ALTER TABLE "public"."onchain_links" ADD COLUMN "onchain_referendum_id" integer NULL UNIQUE DEFAULT null;

ALTER TABLE "public"."onchain_links" ALTER COLUMN "onchain_proposal_id" TYPE int4;
ALTER TABLE "public"."onchain_links" ALTER COLUMN "onchain_proposal_id" DROP NOT NULL;
COMMENT ON COLUMN "public"."onchain_links"."onchain_proposal_id" IS E''

ALTER TABLE "public"."posts" ALTER COLUMN "topic_id" TYPE int4;
ALTER TABLE "public"."posts" ALTER COLUMN "topic_id" SET NOT NULL;

ALTER TABLE "public"."posts" ALTER COLUMN "created_at" TYPE timestamptz;
ALTER TABLE "public"."posts" ALTER COLUMN "created_at" SET NOT NULL;
COMMENT ON COLUMN "public"."posts"."created_at" IS E''

ALTER TABLE "public"."posts" ALTER COLUMN "updated_at" TYPE timestamptz;
ALTER TABLE "public"."posts" ALTER COLUMN "updated_at" SET NOT NULL;
COMMENT ON COLUMN "public"."posts"."updated_at" IS E''

ALTER TABLE "public"."onchain_links" ADD COLUMN "onchain_motion_id" integer NULL UNIQUE;

alter table "public"."comments" drop constraint "comments_parent_message_fkey";

ALTER TABLE "public"."comments" DROP COLUMN "parent_comment_id" CASCADE

ALTER TABLE "public"."onchain_links" ADD COLUMN "onchain_treasury_proposal_id" integer NULL UNIQUE;

ALTER TABLE "public"."onchain_links" ALTER COLUMN "onchain_treasury_proposal_id" TYPE int4;
ALTER TABLE "public"."onchain_links" DROP CONSTRAINT "onchain_links_onchain_treasury_proposal_id_key"
COMMENT ON COLUMN "public"."onchain_links"."onchain_treasury_proposal_id" IS E''

CREATE TABLE "public"."reactions"("id" serial NOT NULL, "reaction" char NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("reaction"));

CREATE TABLE "public"."post_reactions"("id" serial NOT NULL, "post_id" integer NOT NULL, "user_id" integer NOT NULL, "reaction_id" integer NOT NULL, "created_at" timestamp NOT NULL DEFAULT now(), "updated_at" timestamp NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("reaction_id") REFERENCES "public"."reactions"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("id"));

CREATE TABLE "public"."comment_reactions"("id" serial NOT NULL, "comment_id" uuid NOT NULL, "user_id" integer NOT NULL, "reaction_id" integer NOT NULL, "created_at" timestamp NOT NULL DEFAULT now(), "updated_at" timestamp NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("comment_id") REFERENCES "public"."comments"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("reaction_id") REFERENCES "public"."reactions"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("id"));

alter table "public"."post_reactions" drop constraint "post_reactions_reaction_id_fkey";

alter table "public"."comment_reactions" drop constraint "comment_reactions_reaction_id_fkey";

DROP TABLE "public"."reactions"

ALTER TABLE "public"."comment_reactions" ADD COLUMN "reaction" bpchar NULL;

ALTER TABLE "public"."comment_reactions" ALTER COLUMN "reaction" TYPE bpchar;
ALTER TABLE "public"."comment_reactions" ALTER COLUMN "reaction" SET NOT NULL;
COMMENT ON COLUMN "public"."comment_reactions"."reaction" IS E''

ALTER TABLE "public"."post_reactions" ADD COLUMN "reaction" bpchar NOT NULL;

ALTER TABLE "public"."comment_reactions" DROP COLUMN "reaction_id" CASCADE

ALTER TABLE "public"."post_reactions" DROP COLUMN "reaction_id" CASCADE

ALTER TABLE "public"."post_reactions" ALTER COLUMN "reaction" TYPE char;
COMMENT ON COLUMN "public"."post_reactions"."reaction" IS E''

ALTER TABLE "public"."comment_reactions" ALTER COLUMN "reaction" TYPE char;
COMMENT ON COLUMN "public"."comment_reactions"."reaction" IS E''

ALTER TABLE "public"."posts" ALTER COLUMN "title" DROP DEFAULT;
ALTER TABLE "public"."posts" ALTER COLUMN "title" DROP NOT NULL;

CREATE TABLE "public"."post_votes"("id" serial NOT NULL, "post_id" integer NOT NULL, "user_id" integer NOT NULL, "vote" bpchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));

ALTER TABLE "public"."posts" ADD COLUMN "has_poll" boolean NOT NULL DEFAULT false;

ALTER TABLE "public"."posts" ADD COLUMN "block_number" integer NULL;

ALTER TABLE "public"."post_votes" ADD COLUMN "updated_at" timestamptz NULL DEFAULT now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_post_votes_updated_at"
BEFORE UPDATE ON "public"."post_votes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_post_votes_updated_at" ON "public"."post_votes" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."posts" rename column "block_number" to "poll_block_number_end";

CREATE TABLE "public"."poll"("id" serial NOT NULL, "block_end" integer NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));

ALTER TABLE "public"."posts" ADD COLUMN "poll_id" integer NULL;

alter table "public"."posts"
           add constraint "posts_poll_id_fkey"
           foreign key ("poll_id")
           references "public"."poll"
           ("id") on update restrict on delete restrict;

CREATE TABLE "public"."poll_votes"("id" serial NOT NULL, "poll_id" integer NOT NULL, "user_id" integer NOT NULL, "vote" bpchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT now(), "updated_at" timestamp NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("poll_id") REFERENCES "public"."poll"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));

ALTER TABLE "public"."poll" ADD COLUMN "created_at" timestamp NOT NULL DEFAULT now();

ALTER TABLE "public"."poll" ADD COLUMN "updated_at" timestamp NOT NULL DEFAULT now();

ALTER TABLE "public"."posts" DROP COLUMN "has_poll" CASCADE;

ALTER TABLE "public"."posts" DROP COLUMN "poll_block_number_end" CASCADE;

DROP TABLE "public"."post_votes";

ALTER TABLE "public"."poll" ADD COLUMN "post_id" integer NOT NULL;

alter table "public"."poll"
           add constraint "poll_post_id_fkey"
           foreign key ("post_id")
           references "public"."posts"
           ("id") on update restrict on delete restrict;

ALTER TABLE "public"."posts" DROP COLUMN "poll_id" CASCADE;

ALTER TABLE "public"."poll" DROP COLUMN "updated_at" CASCADE;

ALTER TABLE "public"."poll" ADD COLUMN "updated_at" timestamptz NULL DEFAULT now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_poll_updated_at"
BEFORE UPDATE ON "public"."poll"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_poll_updated_at" ON "public"."poll" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

ALTER TABLE "public"."poll_votes" DROP COLUMN "updated_at" CASCADE;

ALTER TABLE "public"."poll_votes" ADD COLUMN "updated_at" timestamptz NULL DEFAULT now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_poll_votes_updated_at"
BEFORE UPDATE ON "public"."poll_votes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_poll_votes_updated_at" ON "public"."poll_votes" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE VIEW post_last_update AS
SELECT c1.id AS comment_id,
    p.id AS post_id,
    max(
        CASE
            WHEN (c1.* IS NULL) THEN p.created_at
            ELSE c1.created_at
        END) AS last_update
   FROM ((posts p
     LEFT JOIN comments c1 ON ((p.id = c1.post_id)))
     LEFT JOIN comments c2 ON (((p.id = c2.post_id) AND ((c1.created_at < c2.created_at) OR ((c1.created_at = c2.created_at) AND (c1.id < c2.id))))))
  WHERE (c2.id IS NULL)
  GROUP BY p.id, c1.id;

alter table "public"."poll_votes" add constraint "poll_votes_poll_id_user_id_key" unique ("poll_id", "user_id");

alter table "public"."comment_reactions" add constraint "comment_reactions_comment_id_user_id_reaction_key" unique ("comment_id", "user_id", "reaction");

alter table "public"."post_reactions" add constraint "post_reactions_post_id_user_id_reaction_key" unique ("post_id", "user_id", "reaction");

ALTER TABLE "public"."onchain_links" ADD COLUMN "onchain_tip_id" integer NULL UNIQUE;