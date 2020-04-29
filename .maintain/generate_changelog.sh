#!/usr/bin/env bash

echo "-- hi"
# shellcheck source=lib.sh
source "$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )/lib.sh"

version="$2"
last_version="$1"

echo "bla   $version .. $last_version"

all_changes="$(sanitised_git_logs "$last_version" "$version")"
echo "all_changes: $all_changes"
fix_changes=""
api_changes=""
feature_changes=""
changes=""

while IFS= read -r line; do
  pr_id=$(echo "$line" | sed -E 's/.*#([0-9]+)\)$/\1/')

  if has_label 'paritytech/polkassembly' "$pr_id" 'x- changelog-fix'; then
    fix_changes="$fix_changes
$line"
  fi
  if has_label 'paritytech/polkassembly' "$pr_id" 'x- changelog-feature'; then
    feature_changes="$feature_changes
$line"
  fi
done <<< "$all_changes"

# Make the polkassembly section if there are any polkassembly changes
if [ -n "$fix_changes" ] ||
   [ -n "$feature_changes" ]; then
  changes=$(cat << EOF
Polkassembly changes
-----------------

EOF
)
  if [ -n "$fix_changes" ]; then
    changes="$changes

Fixes
-------
$fix_changes"
  fi
  if [ -n "$feature_changes" ]; then
    changes="$changes

Features
------
$feature_changes"
  fi
  release_text="$release_text

$changes"
fi

echo "$changes"
