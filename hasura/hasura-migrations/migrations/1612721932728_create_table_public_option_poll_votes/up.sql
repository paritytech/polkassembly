CREATE TABLE "public"."option_poll_votes"("id" serial NOT NULL, "option_poll_id" integer NOT NULL, "user_id" integer NOT NULL, "option" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("option_poll_id") REFERENCES "public"."option_poll"("id") ON UPDATE no action ON DELETE no action);
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
CREATE TRIGGER "set_public_option_poll_votes_updated_at"
BEFORE UPDATE ON "public"."option_poll_votes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_option_poll_votes_updated_at" ON "public"."option_poll_votes" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
