

ALTER TABLE "public"."onchain_links" DROP COLUMN "onchain_tip_id";

alter table "public"."post_reactions" drop constraint "post_reactions_post_id_user_id_reaction_key";

alter table "public"."comment_reactions" drop constraint "comment_reactions_comment_id_user_id_reaction_key";

alter table "public"."poll_votes" drop constraint "poll_votes_poll_id_user_id_key";

DELETE VIEW post_last_update

DROP TRIGGER IF EXISTS "set_public_poll_votes_updated_at" ON "public"."poll_votes";
ALTER TABLE "public"."poll_votes" DROP COLUMN "updated_at";

ALTER TABLE "public"."poll_votes" ADD COLUMN "updated_at" timestamp;
ALTER TABLE "public"."poll_votes" ALTER COLUMN "updated_at" DROP NOT NULL;
ALTER TABLE "public"."poll_votes" ALTER COLUMN "updated_at" SET DEFAULT now();

DROP TRIGGER IF EXISTS "set_public_poll_updated_at" ON "public"."poll";
ALTER TABLE "public"."poll" DROP COLUMN "updated_at";

ALTER TABLE "public"."poll" ADD COLUMN "updated_at" timestamp;
ALTER TABLE "public"."poll" ALTER COLUMN "updated_at" DROP NOT NULL;
ALTER TABLE "public"."poll" ALTER COLUMN "updated_at" SET DEFAULT now();

ALTER TABLE "public"."posts" ADD COLUMN "poll_id" int4;
ALTER TABLE "public"."posts" ALTER COLUMN "poll_id" DROP NOT NULL;
ALTER TABLE "public"."posts" ADD CONSTRAINT posts_poll_id_fkey FOREIGN KEY (poll_id) REFERENCES "public"."poll" (id) ON DELETE restrict ON UPDATE restrict;

alter table "public"."poll" drop constraint "poll_post_id_fkey";

ALTER TABLE "public"."poll" DROP COLUMN "post_id";

DROP TABLE "public"."poll_votes";

ALTER TABLE "public"."posts" ADD COLUMN "poll_block_number_end" int4;
ALTER TABLE "public"."posts" ALTER COLUMN "poll_block_number_end" DROP NOT NULL;

ALTER TABLE "public"."posts" ADD COLUMN "has_poll" bool;
ALTER TABLE "public"."posts" ALTER COLUMN "has_poll" DROP NOT NULL;
ALTER TABLE "public"."posts" ALTER COLUMN "has_poll" SET DEFAULT false;

ALTER TABLE "public"."poll" DROP COLUMN "updated_at";

ALTER TABLE "public"."poll" DROP COLUMN "created_at";

DROP TABLE "public"."poll_votes";

alter table "public"."posts" drop constraint "posts_poll_id_fkey";

ALTER TABLE "public"."posts" DROP COLUMN "poll_id";

DROP TABLE "public"."poll";

alter table "public"."posts" rename column "poll_block_number_end" to "block_number";

DROP TRIGGER IF EXISTS "set_public_post_votes_updated_at" ON "public"."post_votes";
ALTER TABLE "public"."post_votes" DROP COLUMN "updated_at";

ALTER TABLE "public"."posts" DROP COLUMN "block_number";

ALTER TABLE "public"."posts" DROP COLUMN "has_poll";

DROP TABLE "public"."post_votes";

ALTER TABLE ONLY "public"."posts" ALTER COLUMN "title" SET DEFAULT ''no title'::text';
ALTER TABLE "public"."posts" ALTER COLUMN "title" SET NOT NULL;

ALTER TABLE "public"."comment_reactions" ALTER COLUMN "reaction" TYPE character;
COMMENT ON COLUMN "public"."comment_reactions"."reaction" IS E'null'

ALTER TABLE "public"."post_reactions" ALTER COLUMN "reaction" TYPE character;
COMMENT ON COLUMN "public"."post_reactions"."reaction" IS E'null'

ALTER TABLE "public"."post_reactions" ADD COLUMN "reaction_id" int4
ALTER TABLE "public"."post_reactions" ALTER COLUMN "reaction_id" DROP NOT NULL

ALTER TABLE "public"."comment_reactions" ADD COLUMN "reaction_id" int4
ALTER TABLE "public"."comment_reactions" ALTER COLUMN "reaction_id" DROP NOT NULL

ALTER TABLE "public"."post_reactions" DROP COLUMN "reaction";

ALTER TABLE "public"."comment_reactions" ALTER COLUMN "reaction" TYPE character;
ALTER TABLE "public"."comment_reactions" ALTER COLUMN "reaction" DROP NOT NULL;
COMMENT ON COLUMN "public"."comment_reactions"."reaction" IS E'null'

ALTER TABLE "public"."comment_reactions" DROP COLUMN "reaction";

CREATE TABLE "public"."reactions"("id" serial NOT NULL, "reaction" char NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("reaction"));

alter table "public"."comment_reactions" add foreign key ("reaction_id") references "public"."reactions"("id") on update cascade on delete cascade;

alter table "public"."post_reactions" add foreign key ("reaction_id") references "public"."reactions"("id") on update cascade on delete cascade;

DROP TABLE "public"."comment_reactions"

DROP TABLE "public"."post_reactions"

DROP TABLE "public"."reactions"

ALTER TABLE "public"."onchain_links" ALTER COLUMN "onchain_treasury_proposal_id" TYPE integer;
ALTER TABLE "public"."onchain_links" ADD CONSTRAINT "onchain_links_onchain_treasury_proposal_id_key" UNIQUE ("onchain_treasury_proposal_id")
COMMENT ON COLUMN "public"."onchain_links"."onchain_treasury_proposal_id" IS E'null'

ALTER TABLE "public"."onchain_links" DROP COLUMN "onchain_treasury_proposal_id";

ALTER TABLE "public"."comments" ADD COLUMN "parent_comment_id" uuid
ALTER TABLE "public"."comments" ALTER COLUMN "parent_comment_id" DROP NOT NULL

alter table "public"."comments" add foreign key ("parent_comment_id") references "public"."comments"("id") on update no action on delete no action;

ALTER TABLE "public"."onchain_links" DROP COLUMN "onchain_motion_id";

ALTER TABLE "public"."posts" ALTER COLUMN "updated_at" TYPE timestamp with time zone;
ALTER TABLE "public"."posts" ALTER COLUMN "updated_at" DROP NOT NULL;
COMMENT ON COLUMN "public"."posts"."updated_at" IS E'null'

ALTER TABLE "public"."posts" ALTER COLUMN "created_at" TYPE timestamp with time zone;
ALTER TABLE "public"."posts" ALTER COLUMN "created_at" DROP NOT NULL;
COMMENT ON COLUMN "public"."posts"."created_at" IS E'null'

ALTER TABLE "public"."posts" ALTER COLUMN "topic_id" TYPE integer;
ALTER TABLE "public"."posts" ALTER COLUMN "topic_id" DROP NOT NULL;

ALTER TABLE "public"."onchain_links" ALTER COLUMN "onchain_proposal_id" TYPE integer;
ALTER TABLE "public"."onchain_links" ALTER COLUMN "onchain_proposal_id" SET NOT NULL;
COMMENT ON COLUMN "public"."onchain_links"."onchain_proposal_id" IS E'null'

ALTER TABLE "public"."onchain_links" DROP COLUMN "onchain_referendum_id";

alter table "public"."onchain_links" rename to "onchain_proposals";

ALTER TABLE "public"."onchain_proposals" ALTER COLUMN "chain_db_id" TYPE integer;
COMMENT ON COLUMN "public"."onchain_proposals"."chain_db_id" IS E'null'
alter table "public"."onchain_proposals" rename column "onchain_proposal_id" to "chain_db_id";

ALTER TABLE "public"."onchain_proposals" DROP COLUMN "proposer_address";

ALTER TABLE "public"."onchain_proposals" DROP COLUMN "chain_db_id";

ALTER TABLE "public"."onchain_proposals" ADD COLUMN "chain_db_id" uuid
ALTER TABLE "public"."onchain_proposals" ALTER COLUMN "chain_db_id" DROP NOT NULL
ALTER TABLE "public"."onchain_proposals" ADD CONSTRAINT proposals_chain_db_id_key UNIQUE (chain_db_id)

alter table "public"."onchain_proposals" rename to "proposals";


          alter table "public"."proposals" drop constraint "proposals_post_id_fkey"
      

DROP TABLE "public"."proposals"

COMMENT ON COLUMN "public"."comments"."parent_reply_id" IS E'null'
alter table "public"."comments" rename column "parent_comment_id" to "parent_reply_id";

alter table "public"."comments" rename to "replies";

COMMENT ON COLUMN "public"."replies"."parent_comment_id" IS E'null'
alter table "public"."replies" rename column "parent_reply_id" to "parent_comment_id";

alter table "public"."replies" rename to "comments";

COMMENT ON COLUMN "public"."comments"."parent_comment" IS E'null'
alter table "public"."comments" rename column "parent_comment_id" to "parent_comment";
CREATE TABLE public.replies (
    id integer NOT NULL,
    author_id integer,
    content text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    post_id integer
);


alter table "public"."comments" drop constraint "comments_post_id_fkey"
      

COMMENT ON COLUMN "public"."comments"."parent_message" IS E'null'
alter table "public"."comments" rename column "parent_comment" to "parent_message";

DROP TRIGGER IF EXISTS "set_public_comments_updated_at" ON "public"."comments";
ALTER TABLE "public"."comments" DROP COLUMN "updated_at";

ALTER TABLE "public"."comments" DROP COLUMN "created_at";

ALTER TABLE "public"."comments" DROP COLUMN "author_id";

ALTER TABLE "public"."comments" DROP COLUMN "post_id";

COMMENT ON COLUMN "public"."comments"."parent_message" IS E'null'

DROP TABLE comments;

alter table "public"."post_topics" rename to "topics";
ALTER TABLE posts
ADD COLUMN modification_date time without time zone DEFAULT now() NOT NULL;

ALTER TABLE posts
ADD COLUMN creation_date timestamp without time zone DEFAULT now() NOT NULL;

DROP TRIGGER IF EXISTS "set_public_posts_updated_at" ON "public"."posts";
ALTER TABLE "public"."posts" DROP COLUMN "updated_at";

ALTER TABLE "public"."posts" DROP COLUMN "created_at";


alter table "public"."posts" drop constraint "posts_type_id_fkey"
      

ALTER TABLE "public"."posts" DROP COLUMN "type_id";

DROP TABLE "public"."post_types"
CREATE TABLE "public"."proposals"("id" serial NOT NULL, "onchain_id" integer NOT NULL, "post_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "method_name" text NOT NULL, "method_arguments" text, "deposit" integer NOT NULL, "referendum" boolean NOT NULL DEFAULT false, PRIMARY KEY ("id") , FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"), UNIQUE ("onchain_id"), UNIQUE ("post_id")); COMMENT ON TABLE "public"."proposals" IS E'on chain proposal or referendum';

ALTER TABLE "public"."posts" ALTER COLUMN "category_id" TYPE integer;
ALTER TABLE "public"."posts" ALTER COLUMN "category_id" SET NOT NULL;
COMMENT ON COLUMN "public"."posts"."category_id" IS E'null'
alter table "public"."posts" rename column "topic_id" to "category_id";

alter table "public"."topics" rename to "categories";

ALTER TABLE "public"."proposals" ALTER COLUMN "deposit" TYPE integer;
COMMENT ON COLUMN "public"."proposals"."deposit" IS E'null'

ALTER TABLE "public"."posts" ADD COLUMN "proposal_id" int4
ALTER TABLE "public"."posts" ALTER COLUMN "proposal_id" DROP NOT NULL
ALTER TABLE "public"."posts" ADD CONSTRAINT posts_proposal_id_key UNIQUE (proposal_id)

ALTER TABLE "public"."posts" DROP COLUMN "proposal_id";

DROP TABLE "public"."proposals"
DELETE FUNCTION public.set_current_timestamp_updated_at;
DELETE FUNCTION public.truncate_tables;
DROP TABLE public.posts;
DROP TABLE public.categ;
DROP SEQUENCE public.categories_id_seq;
DROP SEQUENCE public.messages_id_seq;
DROP TABLE public.replies;
DROP SEQUENCE public.replies_id_seq;