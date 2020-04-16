{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "polkassembly.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create unified labels for polkassembly components
*/}}
{{- define "polkassembly.common.matchLabels" -}}
app: {{ template "polkassembly.name" . }}
release: {{ .Release.Name }}
chain: {{ .Values.chainName }}
{{- end -}}

{{- define "polkassembly.common.metaLabels" -}}
chart: {{ .Chart.Name }}-{{ .Chart.Version }}
heritage: {{ .Release.Service }}
{{- end -}}

{{- define "polkassembly.frontend.labels" -}}
{{ include "polkassembly.frontend.matchLabels" . }}
{{ include "polkassembly.common.metaLabels" . }}
{{- end -}}

{{- define "polkassembly.frontend.matchLabels" -}}
{{ include "polkassembly.common.matchLabels" . }}
{{ include "polkassembly.frontend.selectorLabels" . }}
{{- end -}}

{{- define "polkassembly.frontend.selectorLabels" -}}
component: {{ .Values.frontend.name }}
{{- end -}}

{{- define "polkassembly.authServer.labels" -}}
{{ include "polkassembly.authServer.matchLabels" . }}
{{ include "polkassembly.common.metaLabels" . }}
{{- end -}}

{{- define "polkassembly.authServer.matchLabels" -}}
component: {{ .Values.authServer.name }}
{{ include "polkassembly.common.matchLabels" . }}
{{ include "polkassembly.authServer.selectorLabels" . }}
{{- end -}}

{{- define "polkassembly.authServer.selectorLabels" -}}
component: {{ .Values.authServer.name }}
{{- end -}}

{{- define "polkassembly.hasura.labels" -}}
{{ include "polkassembly.hasura.matchLabels" . }}
{{ include "polkassembly.common.metaLabels" . }}
{{- end -}}

{{- define "polkassembly.hasura.matchLabels" -}}
{{ include "polkassembly.hasura.selectorLabels" . }}
{{ include "polkassembly.common.matchLabels" . }}
{{- end -}}

{{- define "polkassembly.hasura.selectorLabels" -}}
component: {{ .Values.hasura.name }}
{{- end -}}

{{- define "polkassembly.chainDbWatcher.labels" -}}
{{ include "polkassembly.chainDbWatcher.matchLabels" . }}
{{ include "polkassembly.common.metaLabels" . }}
{{- end -}}

{{- define "polkassembly.chainDbWatcher.matchLabels" -}}
{{ include "polkassembly.chainDbWatcher.selectorLabels" . }}
{{ include "polkassembly.common.matchLabels" . }}
{{- end -}}

{{- define "polkassembly.chainDbWatcher.selectorLabels" -}}
component: {{ .Values.chainDbWatcher.name }}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}
{{- define "polkassembly.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Create a fully qualified frontend name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}

{{- define "polkassembly.frontend.fullname" -}}
{{- if .Values.frontend.fullnameOverride -}}
{{- .Values.frontend.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- printf "%s-%s" .Release.Name .Values.frontend.name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s-%s" .Release.Name $name .Values.frontend.name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}


{{/*
Create a fully qualified authServer name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}

{{- define "polkassembly.authServer.fullname" -}}
{{- if .Values.authServer.fullnameOverride -}}
{{- .Values.authServer.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- printf "%s-%s" .Release.Name .Values.authServer.name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s-%s" .Release.Name $name .Values.authServer.name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Create a fully qualified hasura name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}

{{- define "polkassembly.hasura.fullname" -}}
{{- if .Values.hasura.fullnameOverride -}}
{{- .Values.hasura.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- printf "%s-%s" .Release.Name .Values.hasura.name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s-%s" .Release.Name $name .Values.hasura.name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Create a fully qualified chainDbWatcher name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}

{{- define "polkassembly.chainDbWatcher.fullname" -}}
{{- if .Values.chainDbWatcher.fullnameOverride -}}
{{- .Values.chainDbWatcher.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- printf "%s-%s" .Release.Name .Values.chainDbWatcher.name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s-%s" .Release.Name $name .Values.chainDbWatcher.name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}
